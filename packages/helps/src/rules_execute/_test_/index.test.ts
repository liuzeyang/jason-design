import { RuleHelper, AbstractRule } from '../index'

interface Person { name: string, age: number }

class CheckName extends AbstractRule<Person>{
  executeRule(obj: Person) {
    return obj?.name.startsWith('jason')
  }
}
class CheckAge extends AbstractRule<Person>{
  executeRule(obj: Person) {
    return obj?.age > 18
  }
}

test('rules', () => {
  let RuleService = new RuleHelper();
  let checkName = new CheckName();
  let checkAge = new CheckAge();
  RuleService.and('成年', [checkName, checkAge]);
  expect(RuleService.execute('成年', 'and', { name: 'jason', age: 20 })).toBe(true)
  expect(1 + 3).toBe(4)
})

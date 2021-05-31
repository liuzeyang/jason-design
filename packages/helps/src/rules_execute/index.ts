export interface BaseRule<T> {
  execute(t: T): boolean
}

export class AbstractRule<T> implements BaseRule<T>{

  execute(t: T): boolean {
    return this.executeRule(this.convert(t))
  }

  protected convert(t: T): T {
    return <T>t;
  }

  protected executeRule(t: T): boolean {
    return true
  }

}

export type Op = 'and' | 'or';

export class RuleHelper<T> {
  private map = new Map<string, Map<Op, AbstractRule<T>[]>>();

  and(name: string, rules: AbstractRule<T>[]): void {
    this.map.set(name, new Map().set('and', rules));
  }

  or(name: string, rules: AbstractRule<T>[]): void {
    this.map.set(name, new Map().set('or', rules));
  }

  execute(name: string, op: Op, t: T): boolean {
    let map = this.map.get(name);
    let rules = map?.get(op);
    if (map && rules) {
      switch (op) {
        case 'and':
          return this.And(t, rules)
          break;
        case 'or':
          return this.Or(t, rules)
          break;
      }
    } else {
      throw new Error('未找到声明');
    }
  }

  And(t: T, rules: AbstractRule<T>[]): boolean {
    for (let index = 0; index < rules.length; index++) {
      const rule = rules[index];
      if (!rule.execute(t)) {
        return false
      }
    }
    return true
  }

  Or(t: T, rules: AbstractRule<T>[]): boolean {
    for (let index = 0; index < rules.length; index++) {
      const rule = rules[index];
      if (rule.execute(t)) {
        return true
      }
    }
    return false
  }
}
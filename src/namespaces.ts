/// <reference path="form-namespace.ts" />

namespace Form {
  class myForm {
    private type: FormType = 'inline'
    private state: FormState = 'enabled'

    constructor(public email: string) { }

    getInfo() {
      return {
        type: this.type,
        state: this.state
      }
    }
  }

  const form = new myForm('test@email.ru')
  console.log(myForm)
}
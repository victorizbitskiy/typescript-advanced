namespace Form {
  export type FormType = 'inline' | 'block'
  export type FormState = 'enabled' | 'disabled'

  export interface FormInfo {
    type: FormType
    state: FormState
  }
}


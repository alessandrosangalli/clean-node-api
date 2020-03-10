import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('Email Validator Adapter', () => {
  test('Should return false if validator return false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })

  test('Should return true if validator return true', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(sut, 'isValid')

    const isValid = sut.isValid('valid_email@mail.com')
    expect(isValid).toBe(true)
  })
})

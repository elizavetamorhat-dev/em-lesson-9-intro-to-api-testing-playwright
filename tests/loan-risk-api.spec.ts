import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'
import { LoanDTO } from './dto/LoanDTO'

const BASE_URL = 'https://backend.tallinn-learning.ee/api/loan-calc/decision'

test('Negative decision - Very High Risk', async ({ request }) => {
  const response = await request.post(BASE_URL, {
    data: LoanDTO.highRisk(),
  })

  expect(response.body).not.toBe(undefined)
  const responseData = await response.json()

  console.log('responseData:', JSON.stringify(responseData, null, 2))

  expect.soft(response.status()).toBe(StatusCodes.OK)
  expect.soft(responseData.riskLevel).toBe('Very High Risk')
  expect.soft(responseData.riskDecision).toBe('negative')
  expect.soft(responseData.riskPeriods).toEqual([])
  expect.soft(typeof responseData.applicationId).toBe('string')

  LoanDTO.checkServerResponse(LoanDTO.highRisk())
})

test('Positive decision - Medium Risk', async ({ request }) => {
  const response = await request.post(BASE_URL, {
    data: LoanDTO.mediumRisk(),
  })

  expect(response.body).not.toBe(undefined)
  const responseData = await response.json()

  expect.soft(response.status()).toBe(StatusCodes.OK)
  expect.soft(responseData.riskLevel).toBe('Medium Risk')
  expect.soft(responseData.riskDecision).toBe('positive')
  expect.soft(responseData.riskPeriods).toEqual([6, 9, 12])
  expect.soft(typeof responseData.applicationId).toBe('string')

  LoanDTO.checkServerResponse(LoanDTO.mediumRisk())
})

test('Positive decision - Low Risk', async ({ request }) => {
  const response = await request.post(BASE_URL, {
    data: LoanDTO.lowRisk(),
  })

  expect(response.body).not.toBe(undefined)
  const responseData = await response.json()

  expect.soft(response.status()).toBe(StatusCodes.OK)
  expect.soft(responseData.riskLevel).toBe('Low Risk')
  expect.soft(responseData.riskDecision).toBe('positive')
  expect.soft(responseData.riskPeriods).toEqual([12, 18, 24, 30, 36])
  expect.soft(typeof responseData.applicationId).toBe('string')

  LoanDTO.checkServerResponse(LoanDTO.lowRisk())
})

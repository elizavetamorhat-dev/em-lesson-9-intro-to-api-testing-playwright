import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'

const BASE_URL = 'https://backend.tallinn-learning.ee/test-orders'

test('GET order with valid ID should recieve code 200', async ({ request }) => {
  const responseOrderId1 = await request.get(`${BASE_URL}/3`)
  expect(responseOrderId1.status()).toBe(StatusCodes.OK)
})

test('Put order with valid ID should receive code 200', async ({ request }) => {
  const requestHeaders = {
    api_key: '1234567890123456',
    'Content-Type': 'application/json',
  }

  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }

  const response = await request.put(`${BASE_URL}/7`, {
    headers: requestHeaders,
    data: requestBody,
  })
  console.log(response.status())
  console.log(await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('DELETE order with valid ID should receive code 204', async ({ request }) => {
  const requestHeaders = {
    api_key: '1234567890123456',
  }

  const response = await request.delete(`${BASE_URL}/3`, {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.NO_CONTENT)
})

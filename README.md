

## Loan Risk Calculation

| № | Scenario | Input | Expected Result |
|---|-----------|-----------|-------------------|
| 1 | Negative – Very High Risk | income: 900, debt: 6500, age: 18, employed: true, loanAmount: 8000, loanPeriod: 3 | riskLevel = "Very High Risk", riskDecision = "negative", riskPeriods = [], status 200 OK |
| 2 | Positive – Medium Risk | income: 6000, debt: 2000, age: 30, employed: true, loanAmount: 5000, loanPeriod: 9 | riskLevel = "Medium Risk", riskDecision = "positive", riskPeriods = [6, 9, 12], status 200 OK |
| 3 | Positive – Low Risk | income: 10000, debt: 500, age: 40, employed: true, loanAmount: 2000, loanPeriod: 12 | riskLevel = "Low Risk", riskDecision = "positive", riskPeriods = [12, 18, 24, 30, 36], status 200 OK |

---

## Order API Methods

| Method  | Description           | Expected Status |
|---------|----------------------|----------------|
| GET     | Get an order by ID    | 200 OK         |
| PUT     | Update an order by ID | 200 OK         |
| DELETE  | Delete an order by ID | 204            |

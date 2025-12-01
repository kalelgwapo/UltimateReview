# UltimateReview

## Development: Running Locally

### 1. Start the .NET Backend

From your project root directory, run:

```bash
dotnet run --project UltimateReview.Api
```
- The Web API will typically be available at:
  - https://localhost:5001
  - (Alternate: http://localhost:5000)

---

### 2. Start the Angular Frontend

Open a new terminal, then:

```bash
cd UltimateReview.Ui
npx ng serve --port 4200
```
- The Angular app will be available at: http://localhost:4200
- It may open automatically in your browser; otherwise, visit the URL manually.

---

### 3. Use the Integrated Application

- Open [http://localhost:4200](http://localhost:4200) in your browser.
- Click the "Weather Forecast (from .NET API)" link to see live data from the backend.

---

### Troubleshooting

- Make sure both servers are actually running and that you allow self-signed certificates for `https://localhost:5001` in your browser if prompted.
- If you encounter CORS or connection issues, double-check that the ports match these instructions and that both the backend and frontend are up.

---

Feel free to ask for additional instructions for production, deployment, or automation!
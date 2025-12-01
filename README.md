# UltimateReview

## Development: Running Locally

### Backend: Cloudflare Worker

1. From the project root, start the Worker:
   ```bash
   cd ultimate-review-worker
   npm run dev
   ```
2. Wrangler serves it at http://localhost:8787 (and http://127.0.0.1:8787).
3. The Worker exposes `/weatherforecast` with mock data and CORS allows the Angular app to call it.

### Frontend: Angular

1. In another terminal:
   ```bash
   cd UltimateReview.Ui
   npx ng serve --port 4200
   ```
2. Open http://localhost:4200 (or http://127.0.0.1:4200).
3. Click **Weather Forecast (Cloudflare Worker API)** to load data from the Worker.

### Historical (Optional): .NET Backend

The original .NET 9 WebAPI project remains in `UltimateReview.Api`. To run it:
```bash
dotnet run --project UltimateReview.Api
```
It usually listens on https://localhost:5001.

### Troubleshooting

- Ensure both dev servers are running before testing the link.
- If the table shows an error, check the browser console for CORS/network problems.
- Match the Worker URL (`localhost` vs `127.0.0.1`) with the Angular origin when testing.

Need production/deployment help? Just ask (Cloudflare Workers publish, Angular hosting, D1/KV setup, etc.).
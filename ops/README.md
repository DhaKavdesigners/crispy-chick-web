# 🍗 Crispy Chick — Operations Command Center (War Room)

Standalone Master Operations Control Room for **Crispy Chick, Kolar Gold Fields (KGF)**.
Inspired by the high-density tactical Minnit Operations War Room, built with React 19, Tailwind CSS, Vite, and real-time Firebase Firestore synchronization.

---

## ⚡ Key Highlights & Architecture

- **Zero Database Bloat**: Connects directly to the live Firebase project (`crispy-chick-kgf`), performing zero write pollution. Reads real-time collections (`orders`, `users`, `riders`, `settings`) on demand.
- **Completely Isolated**: Kept in its own standalone repository and deployed independently to Vercel. Changing or restarting this dashboard has zero impact on the customer-facing PWA.
- **Master Security PIN Gate**: Protected by an `AuthGuard` screen. Default Access PIN is `9035` (configurable dynamically inside the dashboard).
- **100% Free Tier**: Built entirely on free, open tools with zero API billing.

---

## 🎛️ Command Center Modules

1. **War Room Dashboard**:
   - Live KPI cards: Active Orders In-Flight, Total GMV Delivered, Active Online Fleet Riders, Store Open/Halt Status.
   - Real-time Active Orders Stream with elapsed lifecycle timers.
   - Fleet Duty status roster and order volume breakdown.
   - Live revenue vs canceled ticket economics.

2. **Order Lifecycle Deep Inspector**:
   - Instant search by Order ID (e.g. `CC-0042` or 4-digit verification PIN), customer phone, or name.
   - **Minute-by-minute 6-Stage Breadcrumb Lifecycle Trail**:
     1. Placed by Customer (`createdAt`)
     2. Accepted by Shop Counter (`acceptedAt`)
     3. Kitchen Prepared (`preparedAt`)
     4. Dispatched to Rider (`dispatchedAt` with rider name)
     5. Reached Doorstep (`arrivedAt`)
     6. Handshake Verified & Paid (`deliveredAt` or rejection reason)
   - Order OTP Delivery Verification Code badge.
   - Recipient badge (shows if ordered for someone else with recipient name & phone).
   - Delivery Location coordinates with direct 1-click Google Maps pin redirection.

3. **Orders Control Room**:
   - Filter tabs: All, Active, Delivered, Rejected, Cancelled.
   - Search by customer name, phone, item, or order ID.
   - Master status override actions (Force Mark Prepared, Dispatched, Delivered, Cancel).

4. **Customer Directory & Fraud Security**:
   - Unified customer phone list (registered profiles + guest checkout records).
   - Lifetime spend & total order count analytics.
   - Saved delivery addresses & landmarks.
   - 1-click customer ban / suspension switch with custom reason (instantly blocks bad actors from checking out on the live PWA).

5. **Rider Fleet Logistics Command**:
   - Live roster of dispatch drivers with online/offline duty status.
   - Live active order count per rider.
   - Onboard new riders with name, phone, vehicle, and 4-digit rider login PIN.
   - Inline phone and PIN editing.
   - Force set rider duty online/offline or delete from fleet.

6. **Store & Security Settings**:
   - Master Operations Access PIN updater (custom secret PIN for War Room access).
   - Shop Counter POS login ID and passcode management (`owner@crispychick.com`).
   - Store Emergency Ordering Halt toggle.
   - Delivery fee and free delivery threshold configuration.
   - Telegram Bot alert token & chat ID integration.

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start Vite dev server
npm run dev
```

Open your browser at `http://localhost:5173` (or the port Vite displays).
Default Access PIN: **`9035`**

---

## 🌐 Deploy to Vercel (Independent Project)

1. Commit and push this directory to a new GitHub repository (e.g. `github.com/your-username/crispy-chick-ops`):
   ```bash
   git init
   git add .
   git commit -m "feat: Crispy Chick Master Operations Command Center"
   git branch -M main
   git remote add origin https://github.com/<your-username>/crispy-chick-ops.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the `crispy-chick-ops` repository.
4. Framework Preset: **Vite**
5. Click **"Deploy"**.
6. Done! Your Master Operations War Room is live at `https://crispy-chick-ops.vercel.app`!

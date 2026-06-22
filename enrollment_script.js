<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact — Generic School</title>
  <link rel="stylesheet" href="../css/styles.css">
  <style>
    /* Polish styles for Contact page */
    .contact-body {
      padding: 50px 20px;
      max-width: 1000px;
      margin: 0 auto;
      font-family: 'Inter', 'Segoe UI', sans-serif;
    }
    .contact-card {
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.06);
      padding: 30px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .contact-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 5px;
      background: var(--gold, #f0c840);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
    }
    .contact-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    .contact-card:hover::before {
      transform: scaleX(1);
    }
    .contact-row {
      display: flex;
      align-items: center;
      padding: 15px 0;
      border-bottom: 1px solid #f0f4f8;
      transition: background 0.2s ease;
    }
    .contact-row:last-child {
      border-bottom: none;
    }
    .contact-row:hover {
      background: #f9fbfd;
      border-radius: 8px;
      padding-left: 10px;
      padding-right: 10px;
      margin-left: -10px;
      margin-right: -10px;
    }
    .contact-icon {
      font-size: 1.8rem;
      margin-right: 20px;
      transition: transform 0.3s ease;
    }
    .contact-row:hover .contact-icon {
      transform: scale(1.15) rotate(5deg);
    }
    .contact-info .label {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #8899bb;
      margin-bottom: 4px;
    }
    .contact-info p, .contact-info a {
      font-size: 1.05rem;
      color: #2c4a7c;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .contact-info a:hover {
      color: var(--gold, #f0c840);
    }
    .hours-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
    }
    .hours-table td {
      padding: 12px 5px;
      border-bottom: 1px dashed #e0e6f0;
      color: #334;
      font-size: 1rem;
    }
    .hours-table tr:last-child td {
      border-bottom: none;
    }
    .hours-table td:first-child {
      font-weight: 600;
      color: #5a6a8a;
    }
    .hours-table td.closed {
      color: #ff6b6b;
      font-weight: 700;
    }
    .map-placeholder {
      background: linear-gradient(135deg, #f4f7fc 0%, #eef2f9 100%);
      border: 2px dashed #c0d0e0;
      border-radius: 16px;
      padding: 60px 20px;
      text-align: center;
      margin-top: 40px;
      transition: all 0.3s ease;
    }
    .map-placeholder:hover {
      background: #fff;
      border-color: var(--gold, #f0c840);
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    }
    .map-icon {
      font-size: 3rem;
      margin-bottom: 15px;
      animation: float 3s ease-in-out infinite;
    }
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
  </style>
</head>
<body>

  <header>
    <a href="../index.html" class="logo-link">
      <svg class="school-seal" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#142341"/>
        <circle cx="50" cy="50" r="47" fill="none" stroke="#f0c840" stroke-width="2.5"/>
        <circle cx="50" cy="50" r="40" fill="none" stroke="#f0c840" stroke-width="1"/>
        <rect x="32" y="33" width="16" height="23" rx="2" fill="#f0c840"/>
        <rect x="52" y="33" width="16" height="23" rx="2" fill="#c8a200"/>
        <rect x="47" y="33" width="6" height="23" fill="#142341"/>
        <text x="50" y="24" text-anchor="middle" fill="#f0c840" font-size="7" font-family="Arial">✦ ✦ ✦</text>
        <text x="50" y="81" text-anchor="middle" fill="#f0c840" font-size="5.5" font-family="Arial" letter-spacing="0.5">GENERIC SCHOOL</text>
      </svg>
      <div class="school-name">
        <h1>Generic School</h1>
        <p>Generic School Name or Generic Description</p>
      </div>
    </a>
    <nav class="main-nav">
      <div class="nav-item">
        <button class="nav-dropbtn">About ▾</button>
        <div class="dropdown-menu">
          <a href="../pages/history.html">History</a>
          <a href="../pages/contact.html">Contact</a>
        </div>
      </div>
      <a href="index.html#enroll-levels" class="nav-link">Enroll</a>
      <a href="../pages/staff.html" class="nav-link">Log In</a>
    </nav>
  </header>

  <!-- Banner -->
  <div class="page-banner">
    <h2>Contact Us</h2>
    <div class="gold-bar"></div>
    <p>We're here to help. Reach out to us through any of the channels below.</p>
  </div>

  <!-- Contact Body -->
  <div class="contact-body">

    <div class="contact-grid">

      <!-- Card: Location & Contact Details -->
      <div class="contact-card">
        <h3>Get in Touch</h3>

        <div class="contact-row">
          <span class="contact-icon">📍</span>
          <div class="contact-info">
            <p class="label">Address</p>
            <p>123 Generic Street, Barangay Placeholder,<br>Quezon City, Metro Manila, 1100</p>
          </div>
        </div>

        <div class="contact-row">
          <span class="contact-icon">📞</span>
          <div class="contact-info">
            <p class="label">Telephone</p>
            <p>(02) 8123-4567</p>
          </div>
        </div>

        <div class="contact-row">
          <span class="contact-icon">📱</span>
          <div class="contact-info">
            <p class="label">Mobile / SMS</p>
            <p>0917-000-0000</p>
          </div>
        </div>

        <div class="contact-row">
          <span class="contact-icon">✉️</span>
          <div class="contact-info">
            <p class="label">Email</p>
            <a href="mailto:info@genericschool.edu.ph">info@genericschool.edu.ph</a>
          </div>
        </div>

        <div class="contact-row">
          <span class="contact-icon">🌐</span>
          <div class="contact-info">
            <p class="label">Website</p>
            <a href="#">www.genericschool.edu.ph</a>
          </div>
        </div>
      </div>

      <!-- Card: Office Hours -->
      <div class="contact-card">
        <h3>Office Hours</h3>
        <table class="hours-table">
          <tbody>
            <tr>
              <td>Monday</td>
              <td>7:00 AM – 5:00 PM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>7:00 AM – 5:00 PM</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>7:00 AM – 5:00 PM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>7:00 AM – 5:00 PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>7:00 AM – 4:00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>8:00 AM – 12:00 PM</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td class="closed">Closed</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top:22px; padding: 14px 16px; background: #f4f7fc; border-radius: 8px; border-left: 4px solid var(--gold);">
          <p style="font-size:.85rem; color:#5a6a8a; line-height:1.7;">
            <strong style="color:var(--navy);">Note:</strong> Office hours may change during school holidays,
            enrollment periods, and special events. Please call ahead to confirm.
          </p>
        </div>
      </div>

    </div><!-- end contact-grid -->

    <!-- Map Placeholder -->
    <div class="map-placeholder">
      <div class="map-icon">🗺️</div>
      <p>Map / Location Embed Placeholder</p>
      <p style="font-size:.78rem; opacity:.6;">Replace with Google Maps embed when available</p>
    </div>

  </div><!-- end contact-body -->

</body>
</html>


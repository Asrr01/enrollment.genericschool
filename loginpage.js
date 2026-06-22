<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>History — Generic School</title>
  <link rel="stylesheet" href="../css/styles.css">
  <style>
    /* Polish styles for History page */
    .history-body {
      padding: 40px 20px;
      max-width: 1000px;
      margin: 0 auto;
      font-family: 'Inter', 'Segoe UI', sans-serif;
    }
    .history-intro-text p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #334;
    }
    .timeline-item {
      padding: 20px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      margin-bottom: 24px;
      border-left: 5px solid var(--gold, #f0c840);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      opacity: 0;
      animation: fadeInUp 0.6s forwards ease-out;
    }
    .timeline-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    }
    .timeline-year {
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--navy, #142341);
      margin-bottom: 8px;
    }
    .timeline-item h4 {
      font-size: 1.25rem;
      color: #223;
      margin-bottom: 10px;
    }
    .mv-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 50px;
    }
    .mv-card {
      background: linear-gradient(135deg, #142341 0%, #1a305a 100%);
      color: #fff;
      padding: 40px 30px;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(20, 35, 65, 0.2);
      transition: transform 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .mv-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 5px;
      background: var(--gold, #f0c840);
    }
    .mv-card:hover {
      transform: translateY(-8px);
    }
    .mv-card h4 {
      font-size: 1.6rem;
      color: var(--gold, #f0c840);
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .mv-card p {
      font-size: 1.05rem;
      line-height: 1.7;
      color: #e0e6f0;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .timeline-item:nth-child(1) { animation-delay: 0.1s; }
    .timeline-item:nth-child(2) { animation-delay: 0.2s; }
    .timeline-item:nth-child(3) { animation-delay: 0.3s; }
    .timeline-item:nth-child(4) { animation-delay: 0.4s; }
    .timeline-item:nth-child(5) { animation-delay: 0.5s; }
    .timeline-item:nth-child(6) { animation-delay: 0.6s; }
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
    <h2>Our History</h2>
    <div class="gold-bar"></div>
    <p>A legacy of excellence, service, and dedication to the youth.</p>
  </div>

  <!-- Body -->
  <div style="background: var(--white);">
    <div class="history-body">

      <!-- Intro -->
      <div class="history-intro">
        <div class="history-intro-text">
          <h3>Where It All Began</h3>
          <p>
            Generic School was established with a singular vision: to provide quality,
            accessible education to the youth of the community. From its humble beginnings
            as a small local institution, the school has grown into a respected center of
            learning that has shaped thousands of graduates over the decades.
          </p>
          <p>
            Founded by a group of dedicated educators and civic leaders, the school's
            founding principles of integrity, excellence, and service continue to guide
            every student and faculty member to this day.
          </p>
        </div>
        <div class="history-intro-photo">
          <img
            src="https://picsum.photos/600/320?random=20"
            alt="Old photo of the school"
            onerror="this.style.background='#264b8c'; this.removeAttribute('src');"
          >
        </div>
      </div>

      <!-- Timeline -->
      <p class="section-title">Key Milestones</p>
      <div class="timeline">

        <div class="timeline-item">
          <p class="timeline-year">1965</p>
          <h4>School Founded</h4>
          <p>
            Generic School was officially established and opened its doors to its first
            batch of students. Classes were initially held with only a handful of classrooms
            and a passionate faculty of twelve.
          </p>
        </div>

        <div class="timeline-item">
          <p class="timeline-year">1978</p>
          <h4>Expansion of Campus Facilities</h4>
          <p>
            Following rapid enrollment growth, a major expansion project added a new
            multi-story academic building, a gymnasium, and dedicated science laboratories
            to the campus grounds.
          </p>
        </div>

        <div class="timeline-item">
          <p class="timeline-year">1990</p>
          <h4>Introduction of Junior High School Program</h4>
          <p>
            In response to curriculum reforms, the school launched its Junior High School
            department, offering Grades 7 through 10 to accommodate a growing student body
            from the surrounding barangays.
          </p>
        </div>

        <div class="timeline-item">
          <p class="timeline-year">2003</p>
          <h4>Regional Award for Academic Excellence</h4>
          <p>
            Generic School was recognized by the regional education office for its
            outstanding performance in national assessments and its innovative approach
            to science and technology education.
          </p>
        </div>

        <div class="timeline-item">
          <p class="timeline-year">2013</p>
          <h4>Transition to the K–12 Curriculum</h4>
          <p>
            With the implementation of the K–12 program nationwide, the school introduced
            the Senior High School track, offering Academic, Technical-Vocational-Livelihood,
            and Sports strands to its graduates.
          </p>
        </div>

        <div class="timeline-item">
          <p class="timeline-year">2024</p>
          <h4>Launch of Online Enrollment System</h4>
          <p>
            To better serve families in the digital age, Generic School launched this
            Online Enrollment System — streamlining the registration process and
            making education more accessible to all.
          </p>
        </div>

      </div><!-- end timeline -->

      <!-- Mission & Vision -->
      <div class="mv-grid">
        <div class="mv-card">
          <h4>Our Mission</h4>
          <p>
            To nurture well-rounded, morally upright, and academically competent individuals
            by providing a safe, inclusive, and stimulating learning environment rooted in
            the values of integrity, excellence, and service to the community.
          </p>
        </div>
        <div class="mv-card">
          <h4>Our Vision</h4>
          <p>
            A school community of globally competitive learners and responsible citizens
            who are equipped with the knowledge, skills, and values needed to contribute
            meaningfully to society and lead purposeful lives.
          </p>
        </div>
      </div>

    </div>
  </div>

</body>
</html>


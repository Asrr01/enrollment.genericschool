// ============================================================
//  admin page.js — Generic School Admin Panel
//  Pulls real student data from Supabase + AL UI features
// ============================================================

let students = [];
let currentStudent = null;
let isEditing = false;
let activeFilters = { grade: 'all', section: 'all', status: 'all' };

const phaseNames = [
    'Form Submitted',
    'Document Verification',
    'Assessment / Interview',
    'Enrollment Confirmed',
    'Fully Enrolled'
];

const sectionTeachers = {
    'MAGSAYSAY': { prefix: 'MS.', name: 'BONIFACIO' },
    'AGUINALDO': { prefix: 'MS.', name: 'REYES' },
    'RIZAL':     { prefix: 'MR.', name: 'SANTOS' },
    'BONIFACIO': { prefix: 'MS.', name: 'LIM' }
};

// ============================================================
//  AUTH GUARD
// ============================================================
supabaseClient.auth.getSession().then(({ data: { session } }) => {
    if (!session) window.location.href = 'adminlogin.html';
});

// ============================================================
//  PHASE UPDATE IN SUPABASE
// ============================================================
async function updateStudentPhase(studentId, newPhase) {
    const { error } = await supabaseClient
        .from('students')
        .update({ current_phase: newPhase })
        .eq('student_id', studentId);

    if (error) {
        alert('Failed to update phase: ' + error.message);
        console.error(error);
    }
}

// ============================================================
//  LOAD STUDENTS FROM SUPABASE
// ============================================================
async function loadStudents() {
    const grid = document.getElementById('studentsGrid');
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:#2c4a7c;font-weight:700;">Loading students...</div>';

    const { data, error } = await supabaseClient
        .from('students')
        .select(`
            student_id,
            first_name,
            middle_name,
            last_name,
            suffix,
            lrn,
            sex,
            current_phase,
            submitted_at,
            school_year,
            student_statuses ( status_label ),
            grade_levels ( grade_label ),
            strands ( strand_code )
        `)
        .order('submitted_at', { ascending: false });

    if (error) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:red;">Error loading students: ${error.message}</div>`;
        return;
    }

    students = data.map(s => ({
        id:            s.student_id,
        lrn:           s.lrn,
        name:          [s.last_name + ',', s.first_name, s.middle_name || '', s.suffix || ''].filter(Boolean).join(' '),
        firstName:     s.first_name,
        lastName:      s.last_name,
        sex:           s.sex,
        status:        s.current_phase === 5 ? 'Enrolled' : 'Enrolling',
        phase:         s.current_phase,
        phaseName:     phaseNames[s.current_phase - 1],
        grade:         s.grade_levels?.grade_label || '—',
        strand:        s.strands?.strand_code || '',
        studentStatus: s.student_statuses?.status_label || '—',
        submittedAt:   s.submitted_at,
        schoolYear:    s.school_year,
        section:       'Unassigned',
        teacherPrefix: 'MS.',
        teacherName:   '—',
        schedule:      '—',
        classPeriod:   'AM CLASS'
    }));

    document.getElementById('resultsCount').textContent = `Showing all ${students.length} students`;
    renderGrid();
}

// ============================================================
//  RENDER GRID
// ============================================================
function getLastName(fullName) {
    const parts = fullName.trim().split(' ');
    return parts[0].replace(',', '');
}

function renderGrid(studentList = students) {
    const grid = document.getElementById('studentsGrid');
    const countLabel = document.getElementById('resultsCount');
    const clearBtn = document.getElementById('clearFiltersBtn');

    grid.innerHTML = '';

    if (studentList.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:#2c4a7c;font-weight:700;font-size:18px;padding:60px;">No students match the selected filters.</div>';
        countLabel.textContent = 'No results';
        clearBtn.style.display = 'inline-block';
        return;
    }

    countLabel.textContent = `Showing ${studentList.length} of ${students.length} students`;

    const hasActiveFilters = activeFilters.grade !== 'all' || activeFilters.section !== 'all' || activeFilters.status !== 'all';
    clearBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';

    studentList.forEach(student => {
        const card = document.createElement('div');
        card.className = 'student-card';
        card.innerHTML = `
            <h3>${student.lrn}</h3>
            <h3>${getLastName(student.name)}</h3>
            <p style="margin-top:6px;font-size:0.8rem;opacity:0.7;">${student.grade}${student.strand ? ' — ' + student.strand : ''}</p>
            <span class="result-status ${student.status.toLowerCase()}" style="margin-top:8px;display:inline-block;padding:3px 10px;border-radius:20px;font-size:0.75rem;font-weight:700;">
                ${student.phaseName}
            </span>
        `;
        card.addEventListener('click', () => showDetail(student));
        grid.appendChild(card);
    });
}

// ============================================================
//  APPLY FILTERS
// ============================================================
function applyFilters() {
    let filtered = students.filter(s => {
        const matchGrade   = activeFilters.grade   === 'all' || s.grade   === activeFilters.grade;
        const matchSection = activeFilters.section === 'all' || s.section === activeFilters.section;
        const matchStatus  = activeFilters.status  === 'all' || s.status  === activeFilters.status;
        return matchGrade && matchSection && matchStatus;
    });
    renderGrid(filtered);
}

// ============================================================
//  SHOW DETAIL VIEW
// ============================================================
function showDetail(student) {
    currentStudent = student;
    isEditing = false;

    document.getElementById('editBtn').textContent = 'EDIT';

    document.getElementById('detailId').textContent     = student.lrn;
    document.getElementById('detailName').textContent   = student.name;
    document.getElementById('detailSex').textContent    = student.sex;
    document.getElementById('detailStatus').textContent = student.studentStatus;

    const gradeText   = document.getElementById('detailGrade');
    const gradeSelect = document.getElementById('detailGradeSelect');
    gradeText.textContent = student.grade + (student.strand ? ' — ' + student.strand : '');
    gradeText.style.display   = 'inline';
    gradeSelect.style.display = 'none';
    gradeSelect.value = student.grade;

    const dateStr = new Date(student.submittedAt);
    document.getElementById('detailDate').textContent =
        (dateStr.getMonth()+1).toString().padStart(2,'0') + '/' +
        dateStr.getDate().toString().padStart(2,'0') + '/' +
        dateStr.getFullYear();

    // Phase radios
    document.querySelectorAll('input[name="phase"]').forEach(radio => {
        const phaseMap = { first:1, second:2, third:3, fourth:4 };
        radio.checked = phaseMap[radio.value] === student.phase;
    });

    // Section / Teacher / Schedule
    document.getElementById('enrolledSectionText').textContent  = 'SECTION: ' + student.section;
    document.getElementById('enrolledSectionText').style.display = 'inline';
    document.getElementById('enrolledSectionInput').style.display = 'none';
    document.getElementById('enrolledSectionInput').value = student.section;

    document.getElementById('teacherPrefixText').textContent  = student.teacherPrefix;
    document.getElementById('teacherPrefixText').style.display = 'inline';
    document.getElementById('teacherNameText').textContent   = student.teacherName;
    document.getElementById('teacherNameText').style.display  = 'inline';
    document.getElementById('teacherPrefixSelect').style.display = 'none';
    document.getElementById('teacherPrefixSelect').value = student.teacherPrefix;
    document.getElementById('teacherNameInput').style.display = 'none';
    document.getElementById('teacherNameInput').value = student.teacherName;

    document.getElementById('enrolledScheduleText').textContent  = student.schedule;
    document.getElementById('enrolledScheduleText').style.display = 'inline';
    document.getElementById('enrolledScheduleInput').style.display = 'none';
    document.getElementById('enrolledScheduleInput').value = student.schedule;

    document.getElementById('classPeriodText').textContent  = student.classPeriod;
    document.getElementById('classPeriodText').style.display = 'inline';
    document.getElementById('classPeriodSelect').style.display = 'none';
    document.getElementById('classPeriodSelect').value = student.classPeriod;

    // Document links — fetch from Supabase storage
    const birthCertLink = document.getElementById('birthCertLink');
    const sf9Link       = document.getElementById('sf9Link');

    supabaseClient.storage.from('enrollment_documents').list(student.lrn + '/').then(({ data: files }) => {
        if (files) {
            files.forEach(f => {
                const { data: urlData } = supabaseClient.storage.from('enrollment_documents').getPublicUrl(student.lrn + '/' + f.name);
                if (f.name.startsWith('birth_cert_') && birthCertLink) {
                    birthCertLink.href = urlData.publicUrl;
                    birthCertLink.textContent = f.name;
                }
                if (f.name.startsWith('sf9_') && sf9Link) {
                    sf9Link.href = urlData.publicUrl;
                    sf9Link.textContent = f.name;
                }
            });
        }
    });

    document.getElementById('gridView').style.display   = 'none';
    document.getElementById('detailView').style.display = 'block';
    document.getElementById('filterBtn').style.display  = 'none';
    document.getElementById('searchBtn').style.display  = 'none';
    document.getElementById('backBtn').style.display    = 'flex';
}

// ============================================================
//  SHOW GRID VIEW
// ============================================================
function showGrid() {
    document.getElementById('gridView').style.display   = 'block';
    document.getElementById('detailView').style.display = 'none';
    document.getElementById('filterBtn').style.display  = 'block';
    document.getElementById('searchBtn').style.display  = 'flex';
    document.getElementById('backBtn').style.display    = 'none';
    currentStudent = null;
    isEditing = false;
}

document.getElementById('backBtn').addEventListener('click', showGrid);

document.getElementById('clearFiltersBtn').addEventListener('click', () => {
    activeFilters = { grade: 'all', section: 'all', status: 'all' };
    updateFilterChips();
    applyFilters();
});

// ============================================================
//  EDIT / SAVE BUTTON
// ============================================================
document.getElementById('editBtn').addEventListener('click', () => {
    const editBtn         = document.getElementById('editBtn');
    const gradeText       = document.getElementById('detailGrade');
    const gradeSelect     = document.getElementById('detailGradeSelect');
    const sectionText     = document.getElementById('enrolledSectionText');
    const sectionInput    = document.getElementById('enrolledSectionInput');
    const teacherPrefixText   = document.getElementById('teacherPrefixText');
    const teacherNameText     = document.getElementById('teacherNameText');
    const teacherPrefixSelect = document.getElementById('teacherPrefixSelect');
    const teacherNameInput    = document.getElementById('teacherNameInput');
    const scheduleText    = document.getElementById('enrolledScheduleText');
    const scheduleInput   = document.getElementById('enrolledScheduleInput');
    const classPeriodText = document.getElementById('classPeriodText');
    const classPeriodSelect = document.getElementById('classPeriodSelect');

    if (!isEditing) {
        isEditing = true;
        editBtn.textContent = 'SAVE';

        gradeText.style.display   = 'none';
        gradeSelect.style.display = 'inline-block';
        gradeSelect.value = currentStudent.grade;

        sectionText.style.display  = 'none';
        sectionInput.style.display = 'inline-block';
        sectionInput.value = currentStudent.section;

        teacherPrefixText.style.display   = 'none';
        teacherNameText.style.display     = 'none';
        teacherPrefixSelect.style.display = 'inline-block';
        teacherPrefixSelect.value = currentStudent.teacherPrefix;
        teacherNameInput.style.display = 'inline-block';
        teacherNameInput.value = currentStudent.teacherName;

        scheduleText.style.display  = 'none';
        scheduleInput.style.display = 'inline-block';
        scheduleInput.value = currentStudent.schedule;

        classPeriodText.style.display   = 'none';
        classPeriodSelect.style.display = 'inline-block';
        classPeriodSelect.value = currentStudent.classPeriod;

        sectionInput.onchange = () => {
            const val    = sectionInput.value.trim().toUpperCase();
            const mapped = sectionTeachers[val];
            if (mapped) {
                teacherPrefixSelect.value = mapped.prefix;
                teacherNameInput.value    = mapped.name;
            }
        };
    } else {
        isEditing = false;
        editBtn.textContent = 'EDIT';

        currentStudent.grade        = gradeSelect.value;
        currentStudent.section      = sectionInput.value.trim().toUpperCase();
        currentStudent.teacherPrefix = teacherPrefixSelect.value;
        currentStudent.teacherName  = teacherNameInput.value.trim().toUpperCase();
        currentStudent.schedule     = scheduleInput.value.trim().toUpperCase();
        currentStudent.classPeriod  = classPeriodSelect.value;

        gradeText.textContent = currentStudent.grade;
        gradeText.style.display   = 'inline';
        gradeSelect.style.display = 'none';

        sectionText.textContent = 'SECTION: ' + currentStudent.section;
        sectionText.style.display  = 'inline';
        sectionInput.style.display = 'none';
        sectionInput.onchange = null;

        teacherPrefixText.textContent = currentStudent.teacherPrefix;
        teacherPrefixText.style.display   = 'inline';
        teacherNameText.textContent = currentStudent.teacherName;
        teacherNameText.style.display     = 'inline';
        teacherPrefixSelect.style.display = 'none';
        teacherNameInput.style.display    = 'none';

        scheduleText.textContent = currentStudent.schedule;
        scheduleText.style.display  = 'inline';
        scheduleInput.style.display = 'none';

        classPeriodText.textContent = currentStudent.classPeriod;
        classPeriodText.style.display   = 'inline';
        classPeriodSelect.style.display = 'none';

        // Sync local array
        const idx = students.findIndex(s => s.id === currentStudent.id);
        if (idx !== -1) students[idx] = { ...currentStudent };

        applyFilters();
    }
});

// ============================================================
//  PHASE UPDATE via radio buttons
// ============================================================
document.querySelectorAll('input[name="phase"]').forEach(radio => {
    radio.addEventListener('change', async () => {
        if (!currentStudent) return;
        const phaseMap = { first:1, second:2, third:3, fourth:4 };
        const newPhase = phaseMap[radio.value];

        await updateStudentPhase(currentStudent.id, newPhase);

        currentStudent.phase     = newPhase;
        currentStudent.phaseName = phaseNames[newPhase - 1];
        currentStudent.status    = newPhase === 5 ? 'Enrolled' : 'Enrolling';

        const idx = students.findIndex(s => s.id === currentStudent.id);
        if (idx !== -1) students[idx] = { ...currentStudent };
    });
});

// ============================================================
//  IMAGE / DOCUMENT VIEWER
// ============================================================
const imageOverlay = document.getElementById('imageOverlay');
const imageEl      = imageOverlay ? imageOverlay.querySelector('img') : null;

function openImageViewer(e, url) {
    if (e) e.preventDefault();
    if (url && imageEl) imageEl.src = url;
    imageOverlay.classList.add('active');
}

const birthCertLink = document.getElementById('birthCertLink');
const sf9Link       = document.getElementById('sf9Link');

if (birthCertLink) {
    birthCertLink.addEventListener('click', (e) => {
        e.preventDefault();
        openImageViewer(e, birthCertLink.href !== window.location.href ? birthCertLink.href : null);
    });
}
if (sf9Link) {
    sf9Link.addEventListener('click', (e) => {
        e.preventDefault();
        openImageViewer(e, sf9Link.href !== window.location.href ? sf9Link.href : null);
    });
}

document.getElementById('imageClose').addEventListener('click', () => imageOverlay.classList.remove('active'));
imageOverlay.addEventListener('click', e => { if (e.target === imageOverlay) imageOverlay.classList.remove('active'); });

// ============================================================
//  SEARCH POPUP
// ============================================================
const searchOverlay     = document.getElementById('searchOverlay');
const searchClose       = document.getElementById('searchClose');
const searchInput       = document.getElementById('searchInput');
const searchSubmit      = document.getElementById('searchSubmit');
const searchResults     = document.getElementById('searchResults');
const searchFilterChips = document.querySelectorAll('#searchOverlay .filter-chip');

document.getElementById('searchBtn').addEventListener('click', () => {
    searchOverlay.classList.add('active');
    searchInput.focus();
    performSearch('');
});

searchClose.addEventListener('click', () => searchOverlay.classList.remove('active'));
searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) searchOverlay.classList.remove('active'); });

let activeSearchFilter = 'all';
searchFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        searchFilterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeSearchFilter = chip.dataset.filter;
        performSearch(searchInput.value);
    });
});

searchInput.addEventListener('input', e => performSearch(e.target.value));
searchSubmit.addEventListener('click', () => performSearch(searchInput.value));
searchInput.addEventListener('keypress', e => { if (e.key === 'Enter') performSearch(searchInput.value); });

function performSearch(query) {
    const q = query.toLowerCase().trim();

    const filtered = students.filter(s => {
        const matchesQuery = !q ||
            s.name.toLowerCase().includes(q) ||
            s.lrn.includes(q);

        const matchesFilter =
            activeSearchFilter === 'all' ||
            (activeSearchFilter === 'enrolling' && s.status === 'Enrolling') ||
            (activeSearchFilter === 'enrolled'  && s.status === 'Enrolled')  ||
            (activeSearchFilter === 'kinder'    && s.grade  === 'Kinder')    ||
            (activeSearchFilter === 'grade1'    && s.grade  === 'Grade 1')   ||
            (activeSearchFilter === 'grade2'    && s.grade  === 'Grade 2')   ||
            (activeSearchFilter === 'grade3'    && s.grade  === 'Grade 3')   ||
            (activeSearchFilter === 'grade4'    && s.grade  === 'Grade 4')   ||
            (activeSearchFilter === 'grade5'    && s.grade  === 'Grade 5')   ||
            (activeSearchFilter === 'grade6'    && s.grade  === 'Grade 6');

        return matchesQuery && matchesFilter;
    });

    renderSearchResults(filtered);
}

function renderSearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div style="color:rgba(255,255,255,0.7);text-align:center;padding:30px;font-weight:600;">No students found</div>';
        return;
    }

    searchResults.innerHTML = results.map(s => `
        <div class="search-result-item" onclick="selectStudentFromSearch('${s.id}')">
            <div class="result-info">
                <h4>${s.name}</h4>
                <p>LRN: ${s.lrn} • ${s.grade}${s.strand ? ' — ' + s.strand : ''}</p>
            </div>
            <div class="result-status ${s.status.toLowerCase()}">${s.phaseName}</div>
        </div>
    `).join('');
}

function selectStudentFromSearch(id) {
    const student = students.find(s => s.id === id);
    if (student) {
        searchOverlay.classList.remove('active');
        showDetail(student);
    }
}

// ============================================================
//  FILTER POPUP
// ============================================================
const filterOverlay = document.getElementById('filterOverlay');
const filterChips   = document.querySelectorAll('#filterOverlay .filter-chip');

document.getElementById('filterBtn').addEventListener('click',   () => filterOverlay.classList.add('active'));
document.getElementById('filterClose').addEventListener('click', () => filterOverlay.classList.remove('active'));
filterOverlay.addEventListener('click', e => { if (e.target === filterOverlay) filterOverlay.classList.remove('active'); });

function updateFilterChips() {
    filterChips.forEach(chip => {
        const type  = chip.dataset.type;
        const value = chip.dataset.value;
        chip.classList.toggle('active', activeFilters[type] === value);
    });
}

filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        const type  = chip.dataset.type;
        const value = chip.dataset.value;
        activeFilters[type] = value;
        document.querySelectorAll(`#filterOverlay .filter-chip[data-type="${type}"]`)
            .forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
    });
});

document.getElementById('filterClear').addEventListener('click', () => {
    activeFilters = { grade: 'all', section: 'all', status: 'all' };
    updateFilterChips();
});

document.getElementById('filterApply').addEventListener('click', () => {
    applyFilters();
    filterOverlay.classList.remove('active');
});

// ============================================================
//  INIT
// ============================================================
loadStudents();
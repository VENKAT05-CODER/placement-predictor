// 30 Top Companies for Amrita (updated with lower CGPA options)
const companies = [
    { id: 1, name: "Microsoft", minCGPA: 8.0, requiredSkills: ["C#", ".NET", "Azure", "SQL"], avgLPA: 18.7, logo: "https://logo.clearbit.com/microsoft.com" },
    { id: 2, name: "Amazon", minCGPA: 8.0, requiredSkills: ["Java", "AWS", "System Design"], avgLPA: 20.2, logo: "https://logo.clearbit.com/amazon.com" },
    { id: 3, name: "Google", minCGPA: 8.5, requiredSkills: ["Python", "Algorithms", "Data Structures"], avgLPA: 24.5, logo: "https://logo.clearbit.com/google.com" },
    { id: 4, name: "Adobe", minCGPA: 7.5, requiredSkills: ["JavaScript", "React", "UI/UX"], avgLPA: 12.0, logo: "https://logo.clearbit.com/adobe.com" },
    { id: 5, name: "Intel", minCGPA: 7.5, requiredSkills: ["C++", "OS", "Embedded Systems"], avgLPA: 10.0, logo: "https://logo.clearbit.com/intel.com" },
    { id: 6, name: "Oracle", minCGPA: 7.0, requiredSkills: ["Java", "DBMS", "Cloud"], avgLPA: 8.0, logo: "https://logo.clearbit.com/oracle.com" },
    { id: 7, name: "TCS", minCGPA: 6.0, requiredSkills: ["Java", "SQL", "Spring Boot"], avgLPA: 3.5, logo: "https://logo.clearbit.com/tcs.com" },
    { id: 8, name: "Infosys", minCGPA: 6.0, requiredSkills: ["Python", "SQL", "Django"], avgLPA: 3.8, logo: "https://logo.clearbit.com/infosys.com" },
    { id: 9, name: "Wipro", minCGPA: 6.0, requiredSkills: ["Java", "C++", "OOPs"], avgLPA: 3.6, logo: "https://logo.clearbit.com/wipro.com" },
    { id: 10, name: "HCL", minCGPA: 6.0, requiredSkills: ["JavaScript", "React", "HTML/CSS"], avgLPA: 4.0, logo: "https://logo.clearbit.com/hcl.com" },
    { id: 11, name: "Accenture", minCGPA: 6.5, requiredSkills: ["Java", "Spring", "Microservices"], avgLPA: 4.5, logo: "https://logo.clearbit.com/accenture.com" },
    { id: 12, name: "Cognizant", minCGPA: 6.0, requiredSkills: [".NET", "SQL", "C#"], avgLPA: 4.2, logo: "https://logo.clearbit.com/cognizant.com" },
    { id: 13, name: "Capgemini", minCGPA: 6.0, requiredSkills: ["Python", "Data Analysis", "Pandas"], avgLPA: 4.0, logo: "https://logo.clearbit.com/capgemini.com" },
    { id: 14, name: "IBM", minCGPA: 7.0, requiredSkills: ["Java", "Cloud", "AI"], avgLPA: 6.0, logo: "https://logo.clearbit.com/ibm.com" },
    { id: 15, name: "JP Morgan", minCGPA: 7.5, requiredSkills: ["Java", "Python", "Finance"], avgLPA: 12.0, logo: "https://logo.clearbit.com/jpmorgan.com" },
    { id: 16, name: "Goldman Sachs", minCGPA: 8.0, requiredSkills: ["Java", "Algorithms", "Finance"], avgLPA: 15.0, logo: "https://logo.clearbit.com/goldmansachs.com" },
    { id: 17, name: "Swiggy", minCGPA: 7.0, requiredSkills: ["Python", "JavaScript", "React"], avgLPA: 9.0, logo: "https://logo.clearbit.com/swiggy.com" },
    { id: 18, name: "Paytm", minCGPA: 7.0, requiredSkills: ["Java", "Android", "Spring"], avgLPA: 8.0, logo: "https://logo.clearbit.com/paytm.com" },
    { id: 19, name: "Flipkart", minCGPA: 7.5, requiredSkills: ["Java", "Python", "Algorithms"], avgLPA: 12.0, logo: "https://logo.clearbit.com/flipkart.com" },
    { id: 20, name: "Zoho", minCGPA: 7.0, requiredSkills: ["JavaScript", "React", "Node.js"], avgLPA: 7.0, logo: "https://logo.clearbit.com/zoho.com" },
    { id: 21, name: "VMware", minCGPA: 7.5, requiredSkills: ["C++", "Virtualization", "Networking"], avgLPA: 9.0, logo: "https://logo.clearbit.com/vmware.com" },
    { id: 22, name: "Cisco", minCGPA: 7.0, requiredSkills: ["C++", "Networking", "Python"], avgLPA: 8.5, logo: "https://logo.clearbit.com/cisco.com" },
    { id: 23, name: "Dell", minCGPA: 6.5, requiredSkills: ["Java", "Cloud", "DevOps"], avgLPA: 7.0, logo: "https://logo.clearbit.com/dell.com" },
    { id: 24, name: "NVIDIA", minCGPA: 8.3, requiredSkills: ["C++", "CUDA", "Parallel Computing"], avgLPA: 26.7, logo: "https://logo.clearbit.com/nvidia.com" },
    { id: 25, name: "Uber", minCGPA: 7.5, requiredSkills: ["Python", "Java", "Algorithms"], avgLPA: 16.0, logo: "https://logo.clearbit.com/uber.com" },
    { id: 26, name: "Tech Mahindra", minCGPA: 6.0, requiredSkills: ["Java", "SQL", "Communication"], avgLPA: 3.2, logo: "https://logo.clearbit.com/techmahindra.com" },
    { id: 27, name: "L&T Infotech", minCGPA: 6.0, requiredSkills: ["Python", "JavaScript", "Basic Programming"], avgLPA: 3.5, logo: "https://logo.clearbit.com/lntinfotech.com" },
    { id: 28, name: "Mindtree", minCGPA: 6.0, requiredSkills: ["Java", "Spring", "SQL"], avgLPA: 3.8, logo: "https://logo.clearbit.com/mindtree.com" },
    { id: 29, name: "Mphasis", minCGPA: 6.0, requiredSkills: [".NET", "C#", "OOPs"], avgLPA: 3.5, logo: "https://logo.clearbit.com/mphasis.com" },
    { id: 30, name: "Hexaware", minCGPA: 6.0, requiredSkills: ["Java", "Testing", "Automation"], avgLPA: 3.8, logo: "https://logo.clearbit.com/hexaware.com" }
];

// All available skills from the companies
const allSkills = [...new Set(companies.flatMap(c => c.requiredSkills))].sort();

let students = JSON.parse(localStorage.getItem('amritaPlacementStudents')) || [];

// Initialize tag input for skills
function initSkillTags() {
    const container = document.getElementById('skillTags');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type to add skills';
    container.appendChild(input);
    
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
    container.appendChild(dropdown);
    
    // Add existing tags if editing
    function addTag(text) {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.innerHTML = `${text} <span class="remove">×</span>`;
        container.insertBefore(tag, input);
        
        tag.querySelector('.remove').addEventListener('click', () => {
            container.removeChild(tag);
        });
    }
    
    input.addEventListener('input', function() {
        const text = this.value.toLowerCase();
        dropdown.innerHTML = '';
        
        if (!text) {
            dropdown.classList.remove('show');
            return;
        }
        
        const matches = allSkills.filter(skill => 
            skill.toLowerCase().includes(text) && 
            ![...container.querySelectorAll('.tag')].some(t => t.textContent.replace('×', '').trim() === skill)
        );
        
        if (matches.length === 0) {
            dropdown.classList.remove('show');
            return;
        }
        
        matches.forEach(skill => {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            item.textContent = skill;
            item.addEventListener('click', () => {
                addTag(skill);
                input.value = '';
                dropdown.classList.remove('show');
            });
            dropdown.appendChild(item);
        });
        
        dropdown.classList.add('show');
    });
    
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && this.value) {
            e.preventDefault();
            if (allSkills.includes(this.value)) {
                addTag(this.value);
                this.value = '';
            }
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!container.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
    
    return {
        getSkills: () => [...container.querySelectorAll('.tag')].map(t => t.textContent.replace('×', '').trim()),
        clear: () => {
            container.querySelectorAll('.tag').forEach(t => container.removeChild(t));
        }
    };
}

const skillTags = initSkillTags();

// Form Submission
document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('studentName').value.trim();
    const cgpa = parseFloat(document.getElementById('studentCGPA').value);
    const branch = document.getElementById('studentBranch').value;
    const skills = skillTags.getSkills();
    const internships = document.getElementById('studentInternships').value
                      .split(',')
                      .map(i => i.trim())
                      .filter(i => i);
    const certifications = document.getElementById('studentCertifications').value
                         .split(',')
                         .map(c => c.trim())
                         .filter(c => c);
    
    if (!name) {
        alert('Please enter student name');
        return;
    }
    
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
        alert('Please enter valid CGPA between 0-10');
        return;
    }
    
    if (cgpa < 6) {
        alert('Minimum CGPA requirement is 6.0 for placements');
        return;
    }
    
    if (!branch) {
        alert('Please select branch');
        return;
    }
    
    if (skills.length === 0) {
        alert('Please add at least one skill');
        return;
    }
    
    const student = {
        id: Date.now(),
        name,
        cgpa,
        branch,
        skills,
        internships,
        certifications,
        placements: []
    };
    
    students.push(student);
    localStorage.setItem('amritaPlacementStudents', JSON.stringify(students));
    updateStudentsList();
    updatePlacementStats();
    this.reset();
    skillTags.clear();
    alert('Student added successfully!');
});

// Update Students List
function updateStudentsList() {
    const container = document.getElementById('studentsList');
    container.innerHTML = '';
    
    if (students.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4>No students added yet</h4>
                <p class="text-muted">Add students using the form above</p>
            </div>
        `;
        return;
    }
    
    students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4 mb-4';
        
        let html = `
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                        <h5 class="card-title">${student.name}</h5>
                        <button class="btn btn-sm btn-danger delete-btn" data-id="${student.id}">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                    <p class="card-text">CGPA: ${student.cgpa} | Branch: ${student.branch}</p>
                    <div class="mb-2">
                        ${student.skills.map(skill => `<span class="skill-pill">${skill}</span>`).join(' ')}
                    </div>`;
        
        if (student.placements && student.placements.length > 0) {
            const top = student.placements[0];
            html += `
                <div class="d-flex align-items-center mb-2">
                    <img src="${top.logo}" class="company-logo me-2" alt="${top.company}" onerror="this.src='https://via.placeholder.com/40'">
                    <div>
                        <h6 class="mb-0">${top.company}</h6>
                        <small>${top.matchScore}% Match</small>
                    </div>
                </div>
                <p>Estimated: ₹${top.estimatedLPA} LPA</p>
                <div class="progress mb-2">
                    <div class="progress-bar" style="width: ${top.matchScore}%; background-color: var(--amrita-dark);"></div>
                </div>
                <button class="btn btn-sm btn-outline-primary view-all-btn" data-id="${student.id}" style="border-color: var(--amrita-dark); color: var(--amrita-dark);">
                    <i class="bi bi-eye"></i> View All Matches
                </button>
            `;
        } else {
            html += `<button class="btn btn-sm btn-primary predict-btn" data-id="${student.id}" style="background-color: var(--amrita-dark); border: none;">
                <i class="bi bi-lightning"></i> Predict Placements
            </button>`;
        }
        
        html += `</div></div>`;
        card.innerHTML = html;
        container.appendChild(card);
    });
    
    // Add event listeners for predict and delete buttons
    document.querySelectorAll('.predict-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const studentId = parseInt(this.getAttribute('data-id'));
            predictForStudent(studentId);
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const studentId = parseInt(this.getAttribute('data-id'));
            if (confirm('Are you sure you want to delete this student?')) {
                students = students.filter(s => s.id !== studentId);
                localStorage.setItem('amritaPlacementStudents', JSON.stringify(students));
                updateStudentsList();
                updatePlacementStats();
                alert('Student deleted successfully!');
            }
        });
    });
    
    document.querySelectorAll('.view-all-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const studentId = parseInt(this.getAttribute('data-id'));
            showAllMatches(studentId);
        });
    });
}

// Show all matches in a modal
function showAllMatches(studentId) {
    const student = students.find(s => s.id === studentId);
    if (!student || !student.placements || student.placements.length === 0) return;
    
    const modalHtml = `
        <div class="modal fade" id="matchesModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">All Placement Matches for ${student.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Company</th>
                                        <th>Match Score</th>
                                        <th>Estimated LPA</th>
                                        <th>Skills Matched</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${student.placements.map(placement => `
                                        <tr>
                                            <td>
                                                <img src="${placement.logo}" class="company-logo me-2" alt="${placement.company}" onerror="this.src='https://via.placeholder.com/40'">
                                                ${placement.company}
                                            </td>
                                            <td>${placement.matchScore}%</td>
                                            <td>₹${placement.estimatedLPA}</td>
                                            <td>${placement.matchedSkills}/${companies.find(c => c.id === placement.companyId).requiredSkills.length}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = modalHtml;
    document.body.appendChild(modalDiv);
    
    const modal = new bootstrap.Modal(document.getElementById('matchesModal'));
    modal.show();
    
    // Remove modal from DOM after it's closed
    document.getElementById('matchesModal').addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modalDiv);
    });
}

// Predict Placements
function predictPlacements(student) {
    const matches = [];
    
    companies.forEach(company => {
        // Calculate base eligibility (with some flexibility for slightly lower CGPAs)
        const cgpaDiff = student.cgpa - company.minCGPA;
        const isEligible = cgpaDiff >= -0.5; // Allow 0.5 below min CGPA with penalty
        
        if (isEligible) {
            const matchedSkills = company.requiredSkills.filter(skill => 
                student.skills.includes(skill)
            ).length;
            
            // Calculate base match score components
            let cgpaScore = Math.max(0, (student.cgpa / 10) * 40); // Max 40 for CGPA
            let skillsScore = (matchedSkills / company.requiredSkills.length) * 35; // Max 35 for skills
            
            // Add bonuses for other factors
            let internshipBonus = 0;
            if (student.internships.length > 0) {
                internshipBonus = Math.min(10, student.internships.length * 2); // Max 10 bonus
            }
            
            let certificationBonus = Math.min(5, student.certifications.length * 0.5); // Max 5 bonus
            
            // Apply CGPA penalty if below minimum
            let cgpaPenalty = 0;
            if (cgpaDiff < 0) {
                cgpaPenalty = Math.abs(cgpaDiff) * 5; // 5% penalty per 0.1 below min
            }
            
            // Calculate total match score (0-100)
            const matchScore = Math.min(100, Math.round(
                cgpaScore +
                skillsScore +
                internshipBonus +
                certificationBonus -
                cgpaPenalty
            ));
            
            if (matchScore >= 40) { // Lower threshold to 40% for broader matches
                // Adjust estimated LPA based on match score and CGPA
                let baseLPA = company.avgLPA;
                if (cgpaDiff < 0) {
                    baseLPA *= 0.9; // 10% reduction if below min CGPA
                }
                
                const estimatedLPA = (baseLPA * (0.8 + (matchScore / 100 * 0.4))).toFixed(2); // 0.8-1.2 multiplier
                
                matches.push({
                    company: company.name,
                    companyId: company.id,
                    logo: company.logo,
                    matchScore,
                    estimatedLPA,
                    matchedSkills,
                    strengths: [
                        matchedSkills > 0 && `${matchedSkills}/${company.requiredSkills.length} skills matched`,
                        student.internships.length > 0 && `${student.internships.length} internship(s)`,
                        student.certifications.length > 0 && `${student.certifications.length} certification(s)`,
                        cgpaDiff < 0 && `CGPA slightly below requirement`
                    ].filter(Boolean)
                });
            }
        }
    });
    
    return matches.sort((a, b) => b.matchScore - a.matchScore);
}

// Predict for Single Student
function predictForStudent(studentId) {
    const student = students.find(s => s.id === studentId);
    if (student) {
        student.placements = predictPlacements(student);
        localStorage.setItem('amritaPlacementStudents', JSON.stringify(students));
        updateStudentsList();
        updatePlacementStats();
        
        if (student.placements.length > 0) {
            // Show success alert with top placement
            const topPlacement = student.placements[0];
            alert(`${student.name} has ${student.placements.length} placement matches!\n\nTop Match: ${topPlacement.company}\nMatch Score: ${topPlacement.matchScore}%\nEstimated Salary: ₹${topPlacement.estimatedLPA} LPA`);
        } else {
            alert(`No placement matches found for ${student.name}. Consider improving skills or CGPA.`);
        }
    }
}

// Update Placement Stats in Footer
function updatePlacementStats() {
    document.getElementById('totalStudents').textContent = students.length;
    const placedStudents = students.filter(s => s.placements && s.placements.length > 0).length;
    document.getElementById('placedStudents').textContent = placedStudents;
}

// Initialize the application
function initApp() {
    updateStudentsList();
    updatePlacementStats();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add sample data button for demo purposes
    const addSampleBtn = document.createElement('button');
    addSampleBtn.className = 'btn btn-secondary position-fixed';
    addSampleBtn.style.bottom = '20px';
    addSampleBtn.style.right = '20px';
    addSampleBtn.style.zIndex = '1000';
    addSampleBtn.innerHTML = '<i class="bi bi-magic"></i> Add Sample Data';
    addSampleBtn.onclick = addSampleData;
    document.body.appendChild(addSampleBtn);
}

// Add sample data for demonstration
function addSampleData() {
    if (students.length > 0 && !confirm('This will add sample students to your existing data. Continue?')) {
        return;
    }
    
    const sampleStudents = [
        {
            id: Date.now() + 1,
            name: "Rahul Sharma",
            cgpa: 9.2,
            branch: "CSE",
            skills: ["Java", "Python", "Algorithms", "Data Structures"],
            internships: ["Google Summer of Code"],
            certifications: ["AWS Certified Developer"],
            placements: []
        },
        {
            id: Date.now() + 2,
            name: "Priya Patel",
            cgpa: 8.5,
            branch: "IT",
            skills: ["JavaScript", "React", "Node.js"],
            internships: ["Zoho", "Freshworks"],
            certifications: ["Full Stack Developer Certification"],
            placements: []
        },
        {
            id: Date.now() + 3,
            name: "Arjun Kumar",
            cgpa: 7.8,
            branch: "ECE",
            skills: ["C++", "Embedded Systems", "Python"],
            internships: ["Intel"],
            certifications: [],
            placements: []
        }
    ];
    
    students = [...students, ...sampleStudents];
    localStorage.setItem('amritaPlacementStudents', JSON.stringify(students));
    updateStudentsList();
    updatePlacementStats();
    alert('Sample students added successfully!');
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
const questions = [
    {
        question: 'Apa yang dimaksud dengan literasi media sosial?',
        options: [
            'Kemampuan menggunakan semua aplikasi media sosial',
            'Kemampuan menggunakan media sosial secara efektif, kritis, dan bertanggung jawab',
            'Kemampuan membuat akun media sosial',
            'Kemampuan mengikuti semua tren di media sosial'
        ],
        correct: 1,
        explanation: 'Literasi media sosial adalah kemampuan menggunakan media sosial secara efektif, kritis, dan bertanggung jawab.'
    },
    {
        question: 'Menurut model Renee Hobbs, dimensi literasi media sosial yang pertama adalah...',
        options: ['Act (Bertindak)', 'Create (Menciptakan)', 'Access (Mengakses)', 'Evaluate (Mengevaluasi)'],
        correct: 2,
        explanation: 'Dimensi pertama adalah Access (Mengakses).'
    },
    {
        question: 'Kemampuan membedakan fakta dan opini di media sosial termasuk dalam dimensi...',
        options: ['Access', 'Analyze', 'Create', 'Act'],
        correct: 1,
        explanation: 'Analyze (Menganalisis) adalah kemampuan membedakan fakta dan opini.'
    },
    {
        question: 'Apa yang harus dilakukan saat menerima informasi yang meragukan di media sosial?',
        options: ['Langsung dibagikan', 'Dipercaya begitu saja', 'Dicek kebenarannya', 'Diabaikan'],
        correct: 2,
        explanation: 'Informasi meragukan harus dicek kebenarannya terlebih dahulu.'
    },
    {
        question: 'Kemampuan menilai kredibilitas sumber informasi disebut dimensi...',
        options: ['Access', 'Analyze', 'Evaluate', 'Create'],
        correct: 2,
        explanation: 'Evaluate adalah kemampuan menilai kredibilitas sumber informasi.'
    },
    {
        question: 'Membuat konten digital yang positif dan bermanfaat termasuk dalam dimensi...',
        options: ['Access', 'Evaluate', 'Act', 'Create'],
        correct: 3,
        explanation: 'Create adalah kemampuan menghasilkan konten digital.'
    },
    {
        question: 'Menggunakan media sosial dengan menjaga etika digital termasuk dalam dimensi...',
        options: ['Act', 'Analyze', 'Access', 'Create'],
        correct: 0,
        explanation: 'Act adalah kemampuan menggunakan media sosial secara bertanggung jawab.'
    },
    {
        question: 'Menurut data APJII, persentase remaja (13-18 tahun) pengguna media sosial adalah...',
        options: ['75,5%', '85,3%', '99,16%', '95,7%'],
        correct: 2,
        explanation: '99,16% remaja (13-18 tahun) adalah pengguna media sosial.'
    },
    {
        question: 'Apa yang dimaksud dengan prokrastinasi akademik?',
        options: ['Belajar dengan tekun', 'Menyelesaikan tugas tepat waktu', 'Menunda-nunda tugas akademik', 'Mengikuti semua kegiatan'],
        correct: 2,
        explanation: 'Prokrastinasi akademik adalah menunda-nunda mengerjakan tugas.'
    },
    {
        question: 'Manakah yang BUKAN merupakan ciri-ciri prokrastinasi akademik?',
        options: ['Menunda tugas', 'Terlambat masuk kelas', 'Menyelesaikan tugas sebelum deadline', 'Tidak siap ujian'],
        correct: 2,
        explanation: 'Menyelesaikan tugas sebelum deadline bukan ciri prokrastinasi.'
    },
    {
        question: 'Berikut adalah faktor penyebab prokrastinasi akademik, KECUALI...',
        options: ['Kecemasan', 'Motivasi tinggi', 'Kesulitan mengambil keputusan', 'Distraksi media sosial'],
        correct: 1,
        explanation: 'Motivasi tinggi justru mencegah prokrastinasi.'
    },
    {
        question: 'Dampak negatif prokrastinasi akademik terhadap prestasi adalah...',
        options: ['Nilai meningkat', 'Kualitas tugas menurun', 'Waktu belajar bertambah', 'Motivasi naik'],
        correct: 1,
        explanation: 'Prokrastinasi menyebabkan kualitas tugas menurun.'
    },
    {
        question: 'Bagaimana hubungan media sosial dengan prokrastinasi akademik?',
        options: ['Tidak berpengaruh', 'Selalu meningkatkan prestasi', 'Penggunaan berlebihan memicu prokrastinasi', 'Hanya untuk belajar'],
        correct: 2,
        explanation: 'Penggunaan media sosial berlebihan dapat memicu prokrastinasi.'
    },
    {
        question: 'Manakah yang merupakan perilaku prokrastinasi akademik?',
        options: ['Mengerjakan tugas segera', 'Menunda belajar meskipun besok ujian', 'Membuat jadwal belajar', 'Datang tepat waktu'],
        correct: 1,
        explanation: 'Menunda belajar meskipun besok ujian adalah prokrastinasi.'
    },
    {
        question: 'Teknik manajemen waktu 25 menit fokus dan 5 menit istirahat disebut...',
        options: ['Teknik 5S', 'Teknik Pomodoro', 'Teknik Pareto', 'Teknik Eisenhower'],
        correct: 1,
        explanation: 'Teknik Pomodoro adalah 25 menit fokus dan 5 menit istirahat.'
    }
];

let currentQuestion = 0;
let userAnswers = [];

document.addEventListener('DOMContentLoaded', function() {
    userAnswers = new Array(questions.length).fill(null);
    showQuestion(0);
});

function showQuestion(index) {
    const content = document.getElementById('kuisContent');
    const progress = document.getElementById('kuisProgress');
    const progressText = document.getElementById('progressText');
    
    if (index >= questions.length) {
        showResult();
        return;
    }

    const q = questions[index];
    const isAnswered = userAnswers[index] !== null;
    
    let optionsHtml = '';
    q.options.forEach((option, optIndex) => {
        const isSelected = userAnswers[index] === optIndex;
        optionsHtml += `
            <div class="option ${isSelected ? 'selected' : ''}" 
                 onclick="selectOption(${index}, ${optIndex})">
                <span class="option-letter">${String.fromCharCode(65 + optIndex)}.</span>
                <span class="option-text">${option}</span>
                ${isSelected ? '<span class="option-check"><i class="fas fa-check-circle"></i></span>' : ''}
            </div>
        `;
    });

    content.innerHTML = `
        <div class="question-number">Pertanyaan ${index + 1} dari ${questions.length}</div>
        <h3 class="question-text">${q.question}</h3>
        <div class="options-container">${optionsHtml}</div>
        ${isAnswered ? `<div class="feedback-box ${userAnswers[index] === q.correct ? 'correct' : 'wrong'}">
            <i class="fas ${userAnswers[index] === q.correct ? 'fa-check-circle' : 'fa-times-circle'}"></i>
            <span>${q.explanation}</span>
        </div>` : ''}
    `;

    const answeredCount = userAnswers.filter(a => a !== null).length;
    progress.style.width = (answeredCount / questions.length * 100) + '%';
    progressText.textContent = `Pertanyaan ${index + 1} dari ${questions.length}`;

    document.getElementById('prevBtn').style.display = index > 0 ? 'inline-flex' : 'none';
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.innerHTML = index === questions.length - 1 ? 'Lihat Hasil <i class="fas fa-flag-checkered"></i>' : 'Selanjutnya <i class="fas fa-arrow-right"></i>';
}

function selectOption(qIndex, optIndex) {
    if (userAnswers[qIndex] !== null) return;
    userAnswers[qIndex] = optIndex;
    showQuestion(qIndex);
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function showResult() {
    document.getElementById('kuisContainer').style.display = 'none';
    document.getElementById('kuisResult').style.display = 'block';
    
    let correct = 0;
    let details = [];
    questions.forEach((q, i) => {
        const answer = userAnswers[i];
        if (answer !== null && answer === q.correct) correct++;
        details.push({
            number: i + 1,
            correct: answer !== null && answer === q.correct
        });
    });

    const total = questions.length;
    const percentage = Math.round((correct / total) * 100);
    
    document.getElementById('scoreNumber').textContent = correct;
    document.getElementById('resultPercentage').textContent = percentage + '%';
    
    let detailsHtml = '<div class="result-detail-grid">';
    details.forEach(d => {
        detailsHtml += `<div class="result-item ${d.correct ? 'correct' : 'wrong'}">
            <span>${d.number}</span>
            <i class="fas ${d.correct ? 'fa-check' : 'fa-times'}"></i>
        </div>`;
    });
    detailsHtml += '</div>';
    document.getElementById('resultDetails').innerHTML = detailsHtml;

    const messageEl = document.getElementById('resultMessage');
    const iconEl = document.getElementById('resultIcon');
    const titleEl = document.getElementById('resultTitle');
    
    if (percentage >= 80) {
        messageEl.innerHTML = '🎉 <strong>Luar Biasa!</strong> Pemahamanmu sangat baik!';
        iconEl.innerHTML = '<i class="fas fa-trophy"></i>';
        titleEl.textContent = '🏆 Hebat!';
    } else if (percentage >= 60) {
        messageEl.innerHTML = '👍 <strong>Bagus!</strong> Pemahamanmu sudah cukup baik.';
        iconEl.innerHTML = '<i class="fas fa-star"></i>';
        titleEl.textContent = '⭐ Cukup Baik!';
    } else {
        messageEl.innerHTML = '📖 <strong>Yuk Belajar Lagi!</strong> Baca ulang materi yang tersedia. Semangat! 💪';
        iconEl.innerHTML = '<i class="fas fa-book"></i>';
        titleEl.textContent = '📚 Perlu Belajar Lagi';
    }
}

function resetKuis() {
    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);
    document.getElementById('kuisContainer').style.display = 'block';
    document.getElementById('kuisResult').style.display = 'none';
    showQuestion(0);
}
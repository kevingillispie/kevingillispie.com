var m, n, r, sorted, temp;

function checkForWholeNumber(v) {
    v.value = v.value.replace(/\D/g, '');
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keyup', function () {
        checkForWholeNumber(this);
    });
});

function fireConfetti(count) {
    tsParticles.load("tsparticles", {
        preset: "confetti",
        "emitters": {
            "life": {
                "count": count,
                "duration": 0.1,
                "delay": 0.1
            },
            "rate": {
                "delay": 0.1,
                "quantity": 150
            },
            "size": {
                "width": 0,
                "height": 0
            }
        }
    });
}

function resetBoard() {
    document.getElementById("result").innerText = '';
    let comments = document.querySelectorAll('.comment');
    if (comments.length > 0) {
        comments.forEach((c, i) => {
            comments[i].remove();
        });
    }
}

function updateComment(i, l, line) {
    i = (i == 1) ? 3 : (i == 5) ? 1 : 2;
    let lastElement = l.childNodes.length - 1;
    if (l.childNodes[lastElement].classList.contains('comment')) {
        l.childNodes[lastElement].remove();
    }
    l.insertAdjacentHTML('beforeend', '<span class="token comment"> // ' + ((i == 3) ? 'r = ' : (i == 1) ? 'm = ' : 'n = ') + line[i] + '</span>');
}

function highlightCode(code, line) {
    code.forEach(l => {
        l.classList.remove('bg-secondary');
    });
    code.forEach((l, i) => {
        if (i == line[0]) {
            l.classList.add('bg-secondary');
            if (i == 1 || i == 5 || i == 6) {
                updateComment(i, l, line);
            }
        }
    });
}

function compareInputValues(m, n) {
    if (m < n) {
        temp = m;
        m = n;
        n = temp;
    }
    return [m, n];
}

function getGCD(click) {
    click.preventDefault();
    resetBoard();

    var visual = document.querySelectorAll('#visual code');
    visual.innerHTML = '';

    var m = parseInt(document.getElementById("m").value);
    var n = parseInt(document.getElementById("n").value);
    var gcd = null;

    sorted = compareInputValues(m, n);
    m = sorted[0];
    n = sorted[1];

    var loopCount = [[0]];

    do {
        r = m % n;
        loopCount.push([1, m, n, r]);
        loopCount.push([2, m, n, r]);
        if (r == 0) {
            loopCount.push([3, n]);
            gcd = n;
            loopCount.push([-1]);
        } else {
            loopCount.push([4, m, n]);
            m = n;
            loopCount.push([5, m, n]);
            n = r;
            loopCount.push([6, m, n, r]);
        }
        loopCount.push([7], [8]);
    } while (r > 0);

    var loopIndex = 0;
    var highlighting = setInterval(function () {
        if (loopIndex < loopCount.length && loopCount[loopIndex][0] != -1) {
            highlightCode(visual, loopCount[loopIndex]);
            loopIndex++;
        } else {
            document.getElementById("result").innerText = gcd;
            if (Number.isInteger(gcd)) {
                fireConfetti(gcd);
            }
            clearInterval(highlighting);
        }
    }, 50);
}
document.getElementById('submit').addEventListener('click', (e) => {
    getGCD(e)
});
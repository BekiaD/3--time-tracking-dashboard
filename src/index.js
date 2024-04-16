import data from './data.json' with { type: 'json' }

const dailyBtn = document.getElementById('dailybtn')
const weeklyBtn = document.getElementById('weeklybtn')
const monthlyBtn = document.getElementById('monthlybtn')

const btnWork = document.getElementById('btn-work')
const btnPlay = document.getElementById('btn-play')
const btnStudy = document.getElementById('btn-study')
const btnExercise = document.getElementById('btn-exercise')
const btnSocial = document.getElementById('btn-social')
const btnSelfCare = document.getElementById('btn-selfcare')

const workHrs = document.getElementById('work-hrs')
const playHrs = document.getElementById('play-hrs')
const studyHrs = document.getElementById('study-hrs')
const exerciseHrs = document.getElementById('exercise-hrs')
const socialHrs = document.getElementById('social-hrs')
const selfcareHrs = document.getElementById('selfcare-hrs')

const oppWorkHrs = document.getElementById('opp-work-hrs')
const oppPlaykHrs = document.getElementById('opp-play-hrs')
const oppStudyHrs = document.getElementById('opp-study-hrs')
const oppExerciseHrs = document.getElementById('opp-exercise-hrs')
const oppSocialHrs = document.getElementById('opp-social-hrs')
const oppSelfcareHrs = document.getElementById('opp-selfcare-hrs')


//REFACTOR TO LOOP THE INDEX - also the dialy/weekly/monthly?
const hrsArr = [workHrs, playHrs, studyHrs, exerciseHrs, socialHrs, selfcareHrs]
const oppHrsArr = [oppWorkHrs, oppPlaykHrs, oppStudyHrs,oppExerciseHrs, oppSocialHrs, oppSelfcareHrs ]

const defaultDisplay = function () {
    for (let i = 0; i < data.length; i++){
        // console.log(i)
        const dailyCurrentHrs = data[i].timeframes.daily.current
        // console.log(dailyCurrentHrs)
        for(let e of hrsArr){
            // e.textContent = dailyCurrentHrs
            // console.log(e)
        }
    }

    for (let e of hrsArr){
        console.log(e)
    }

    // workHrs.textContent = data[0].timeframes.daily.current
    // playHrs.textContent = data[1].timeframes.daily.current
    // studyHrs.textContent = data[2].timeframes.daily.current
    // exerciseHrs.textContent = data[3].timeframes.daily.current
    // socialHrs.textContent = data[4].timeframes.daily.current
    // selfcareHrs.textContent = data[5].timeframes.daily.current

    // oppWorkHrs.textContent = data[0].timeframes.daily.previous
    // oppPlaykHrs.textContent = data[1].timeframes.daily.previous
    // oppStudyHrs.textContent = data[2].timeframes.daily.previous
    // oppExerciseHrs.textContent = data[3].timeframes.daily.previous
    // oppSocialHrs.textContent = data[4].timeframes.daily.previous
    // oppSelfcareHrs.textContent = data[5].timeframes.daily.previous

    dailyBtn.classList.add('text-white')
    weeklyBtn.classList.remove('text-white')
    monthlyBtn.classList.remove('text-white')

    const dynamicTime = document.querySelectorAll('.dynamic-time')
    console.log(dynamicTime)

    for (let span of dynamicTime) {
        span.textContent = 'Day'
    }
}

defaultDisplay()


dailyBtn.addEventListener('click', defaultDisplay)

weeklyBtn.addEventListener('click', () => {
    workHrs.textContent = data[0].timeframes.weekly.current
    // workHrs.classList.add('animate-jump') for some reason it doesn't work

    playHrs.textContent = data[1].timeframes.weekly.current
    studyHrs.textContent = data[2].timeframes.weekly.current
    exerciseHrs.textContent = data[3].timeframes.weekly.current
    socialHrs.textContent = data[4].timeframes.weekly.current
    selfcareHrs.textContent = data[5].timeframes.weekly.current

    oppWorkHrs.textContent = data[0].timeframes.weekly.previous
    oppPlaykHrs.textContent = data[1].timeframes.weekly.previous
    oppStudyHrs.textContent = data[2].timeframes.weekly.previous
    oppExerciseHrs.textContent = data[3].timeframes.weekly.previous
    oppSocialHrs.textContent = data[4].timeframes.weekly.previous
    oppSelfcareHrs.textContent = data[5].timeframes.weekly.previous


    const dynamicTime = document.querySelectorAll('.dynamic-time')
    console.log(dynamicTime)

    for (let span of dynamicTime) {
        span.textContent = 'Week'
    }
    // need to make this work still : to change Last DAY to last WEEK/Month

    dailyBtn.classList.remove('text-white')
    weeklyBtn.classList.add('text-white')
    monthlyBtn.classList.remove('text-white')
})

monthlyBtn.addEventListener('click', () => {
    workHrs.textContent = data[0].timeframes.monthly.current
    playHrs.textContent = data[1].timeframes.monthly.current
    studyHrs.textContent = data[2].timeframes.monthly.current
    exerciseHrs.textContent = data[3].timeframes.monthly.current
    socialHrs.textContent = data[4].timeframes.monthly.current
    selfcareHrs.textContent = data[5].timeframes.monthly.current

    oppWorkHrs.textContent = data[0].timeframes.monthly.previous
    oppPlaykHrs.textContent = data[1].timeframes.monthly.previous
    oppStudyHrs.textContent = data[2].timeframes.monthly.previous
    oppExerciseHrs.textContent = data[3].timeframes.monthly.previous
    oppSocialHrs.textContent = data[4].timeframes.monthly.previous
    oppSelfcareHrs.textContent = data[5].timeframes.monthly.previous

    dailyBtn.classList.remove('text-white')
    weeklyBtn.classList.remove('text-white')
    monthlyBtn.classList.add('text-white')

    const dynamicTime = document.querySelectorAll('.dynamic-time')
    console.log(dynamicTime)

    for (let span of dynamicTime) {
        span.textContent = 'Month'
    }
})



function createCurrentBtn() {
    const btnCurrent = document.createElement('button')
    btnCurrent.classList.add('hover:bg-dark', 'w-20', 'py-1', 'rounded-xl')
    const node1 = document.createTextNode('Current')
    btnCurrent.appendChild(node1)

    return btnCurrent
}




// function createBtns () {
//     // Button Current
//     const btnCurrent = document.createElement('button')
//     const node1 = document.createTextNode('Current')
//     btnCurrent.appendChild(node1)
//     btnCurrent.classList.add('hover:bg-dark', 'w-20', 'py-1', 'rounded-xl')

//     // Button previous
//     const btnPrevious = document.createElement('button')
//     const node2 = document.createTextNode('Previous')
//     btnPrevious.appendChild(node2)
//     btnPrevious.classList.add('hover:bg-dark', 'w-20', 'py-1', 'rounded-xl')



//     // console.log(btnCurrent, btnPrevious)
// }

const createDiv = function () {
    const selectDivSelfCare = document.getElementById('select-div-selfcare')

    createCurrentBtn()
    console.log(createCurrentBtn)

    // selectDivSelfCare.appendChild(btnCurrent)
    // selectDivSelfCare.appendChild(btnPrevious)

    return true
}



// const createDivReset = function () {

//     return false
// }
btnSelfCare.addEventListener('mouseover', createDiv)
// btnSelfCare.addEventListener('mouseout', createDivReset)



{/* <button class="hover:bg-dark w-20 py-1 rounded-xl">Current</button>
<button class="hover:bg-dark w-20 py-1 rounded-xl">Previous</button>  */}
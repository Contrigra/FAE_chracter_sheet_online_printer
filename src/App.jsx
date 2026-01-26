import {useState} from 'react'
import './App.css'

function App() {
    const [characterData, setCharacterData] = useState({
        id: '',
        name: 'Misha',
        description: '',
        gender: '',
        refresh: '3',
        currentPoints: '',
        aspects: {
            highConcept: '',
            trouble: '',
            aspect1: '',
            aspect2: '',
            aspect3: ''
        },
        approaches: {
            careful: '',      // +5
            clever: '',       // +4
            flashy: '',        // +3
            forceful: '',        // +2
            quick: '',      // +1
            sneaky: ''
        },
        extras: '',
        stunts: '',
        stress: [false, false, false],

        consequences: {
            mild2: '',
            moderate4: '',
            severe6: ''
        }
    });

    function handleChange(event) {
        // TODO mapping for aspects? Todo if event name includes consequence or aspect,
        //  to dive into the nexted attribute and change it there for each inputBox
        let newCharacterData = {...characterData};

        if (event.target.parentElement.className === "aspects-input-box") {
            newCharacterData.aspects[event.target.name] = event.target.value;
        } else if (event.target.parentElement.parentElement.className === "approaches-input-box") {
            newCharacterData.approaches[event.target.name] = event.target.value;

        } else if (event.target.parentElement.className === "stress-input-box") {
            let targetIndex = event.target.name.at(-1) - 1;
            newCharacterData.stress[targetIndex] = event.target.checked ;

        } else {
            newCharacterData[event.target.name] = event.target.value;
        }


        setCharacterData(newCharacterData);
    }


    return (
        <div className={'main-container'}>
            <div className={'input-panel'}>
                <h1>Input Panel</h1>
                <InputPanel onChange={handleChange}/>

            </div>
            <div className={'display-panel'}>
                <h1>Display Panel</h1>
                <DisplayPanel characterData={characterData}/>
            </div>
        </div>
    )
}

export default App

// TODO Input компоненты должны модифицировать characterData
function InputPanel({onChange}) {

    return (
        <>
            <form action="">
                <IdInputBox onChange={onChange}/>
                <AspectsInputBox onChange={onChange}/>
                <ApproachesInputBox onChange={onChange}/>
                <StuntsInputBox onChange={onChange}/>
                <StressInputBox onChange={onChange}/>
                <ConsequenceInputBox onChange={onChange}/>
            </form>
        </>
    )
}

function IdInputBox({onChange}) {

    return (
        <div className={"id-input-box"}>
            <div className={"id-input-box-header input-header"}>ID</div>
            <input type="text" onChange={onChange} id="name" name="name" placeholder={"Character Name"}/>
            <input type="text" onChange={onChange} id="description" name="description"
                   placeholder={"Character Description"}/>
            <input type="text" onChange={onChange} id="refresh" name="refresh" placeholder={"Refresh"}/>
            <input type="text" onChange={onChange} id="currentPoints" name="currentPoints"
                   placeholder={"Current Points"}/>
            <input type="text" onChange={onChange} id="gender" name="gender" placeholder={"Gender"}/>
        </div>
    )
}

function AspectsInputBox({onChange}) {
    // TODO Надо чтобы он нестил в аспекты.
    // Сейчас он просто создаёт новый объект. Добавить if clause для аспектов, т.к. они занестины в хендлер?
    return (
        <div className={"aspects-input-box"}>
            <div className={"aspects-input-box-header input-header"}>Aspects</div>
            <input type="text" onChange={onChange} name="highConcept"
                   placeholder="High Concept"/>
            <input type="text" onChange={onChange} name="trouble" placeholder="Trouble"/>
            <input type="text" onChange={onChange} name="aspect1"/>
            <input type="text" onChange={onChange} name="aspect2"/>
            <input type="text" onChange={onChange} name="aspect3"/>
        </div>
    )

}

function ApproachesInputBox({onChange}) {
    // TODO there's no need for ID as inputs are nested within labels.
    //  id needs to be provided if labels use for attribute
    return (
        <div className={"approaches-input-box"}>
            <div className={"approaches-input-box-header input-header"}>Approaches</div>
            <label>Careful
                <input type="text" onChange={onChange} name="careful"/>
            </label>
            <label>Clever
                <input type="text" onChange={onChange} id="clever-approach" name="clever"/>
            </label>
            <label>Flashy
                <input type="text" onChange={onChange} id="flashy-approach" name="flashy"/>
            </label>
            <label>Forceful
                <input type="text" onChange={onChange} id="forceful-approach" name="forceful"/>
            </label>
            <label>Quick
                <input type="text" onChange={onChange} id="quick-approach" name="quick"/>
            </label>
            <label>Sneaky
                <input type="text" onChange={onChange} id="sneaky-approach" name="sneaky"/>
            </label>
        </div>
    )
}

function StuntsInputBox({onChange}) {
    // TODO stunt input bot behave like a reddit text input box.
    //  Currently can't make a new line to write like example:
    // 1. Weaponized incompetence
    // 2. Halfling luck
    return <div className={"stunts-input-box"}>
        <div className={"stunts-input-box-header input-header"}>Stunts</div>
        <input type="text" onChange={onChange} id="stunts" name="stunts"/>
    </div>
}

function StressInputBox({onChange}) {
    return <div className={"stress-input-box"}>
        <div className={"stress-input-box-header input-header"}>Stress</div>
        <input type="checkbox" onChange={onChange} id="stress1" name="stress1"/>
        <input type="checkbox" onChange={onChange} id="stress2" name="stress2"/>
        <input type="checkbox" onChange={onChange} id="stress3" name="stress3"/>
    </div>
}


function ConsequenceInputBox({onChange}) {
    return <div className={"consequence-input-box"}>
        <div className={"consequence-input-box-header input-header"}>Consequences</div>
        <label>2
            <input type="text" onChange={onChange} id="consequence-input2" name="consequence-input2"
                   placeholder="Mild"/>
        </label>
        <label>4
            <input type="text" onChange={onChange} id="consequence-input4" name="consequence-input4"
                   placeholder="Moderate"/>
        </label>
        <label>6
            <input type="text" onChange={onChange} id="consequence-input6" name="consequence-input6"
                   placeholder="Severe"/>
        </label>
    </div>
}


//  TODO сделать вывод инпута
function DisplayPanel({characterData}) {
    return (<div>Full json {JSON.stringify(characterData)}</div>
    )
}

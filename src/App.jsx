import {useState} from 'react'
import './App.css'

function App() {
    const [characterData, setCharacterData] = useState({
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

        let newCharacterData = {...characterData};
        // TODO consequences and stunt input\state as text with new lines
        if (event.target.dataset["aspect"]) {
            newCharacterData.aspects[event.target.name] = event.target.value;

        } else if (event.target.dataset["approach"]) {
            newCharacterData.approaches[event.target.name] = event.target.value;

        } else if (event.target.dataset["stress"]) {
            let targetIndex = event.target.name.at(-1) - 1;
            newCharacterData.stress[targetIndex] = event.target.checked;

        } else if (event.target.dataset["consequences"]) {
            newCharacterData.consequences[event.target.dataset["consequences"]] = event.target.value

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

    return (
        <div className={"aspects-input-box"}>
            <div className={"aspects-input-box-header input-header"}>Aspects</div>
            <input type="text" onChange={onChange} name="highConcept" data-aspect={"highConcept"}
                   placeholder="High Concept"/>
            <input type="text" onChange={onChange} data-aspect={"trouble"} name="trouble" placeholder="Trouble"/>
            <input type="text" onChange={onChange} data-aspect={"aspect1"} name="aspect1"/>
            <input type="text" onChange={onChange} data-aspect={"aspect2"} name="aspect2"/>
            <input type="text" onChange={onChange} data-aspect={"aspect3"} name="aspect3"/>
        </div>
    )

}

function ApproachesInputBox({onChange}) {
    return (
        <div className={"approaches-input-box"}>
            <div className={"approaches-input-box-header input-header"}>Approaches</div>
            <label>Careful
                <input type="text" onChange={onChange} name="careful" data-approach="careful"/>
            </label>
            <label>Clever
                <input type="text" onChange={onChange} name="clever" data-approach="clever"/>
            </label>
            <label>Flashy
                <input type="text" onChange={onChange} name="flashy" data-approach="flashy"/>
            </label>
            <label>Forceful
                <input type="text" onChange={onChange} name="forceful" data-approach="forceful"/>
            </label>
            <label>Quick
                <input type="text" onChange={onChange} name="quick" data-approach="quick"/>
            </label>
            <label>Sneaky
                <input type="text" onChange={onChange} name="sneaky" data-approach="sneaky"/>
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
        <textarea onChange={onChange} rows={4} name="stunts" placeholder={"1. Dangerously incompetent\n2. Halfling luck"}/>
    </div>
}

function StressInputBox({onChange}) {
    return <div className={"stress-input-box"}>
        <div className={"stress-input-box-header input-header"}>Stress</div>
        <input type="checkbox" onChange={onChange} data-stress='stress1' name="stress1"/>
        <input type="checkbox" onChange={onChange} data-stress='stress2' name="stress2"/>
        <input type="checkbox" onChange={onChange} data-stress='stress3' name="stress3"/>
    </div>
}


function ConsequenceInputBox({onChange}) {
    // TODO
    return <div className={"consequence-input-box"}>
        <div className={"consequence-input-box-header input-header"}>Consequences</div>
        <label>2
            <input type="text" onChange={onChange} data-consequences="mild2" name="mild2"
                   placeholder="Mild"/>
        </label>
        <label>4
            <input type="text" onChange={onChange} data-consequences="moderate4" name="moderate4"
                   placeholder="Moderate"/>
        </label>
        <label>6
            <input type="text" onChange={onChange} data-consequences="severe6" name="severe6"
                   placeholder="Severe"/>
        </label>
    </div>
}


//  TODO сделать вывод инпута
function DisplayPanel({characterData}) {
    return (<div>Full json {JSON.stringify(characterData)}</div>
    )
}

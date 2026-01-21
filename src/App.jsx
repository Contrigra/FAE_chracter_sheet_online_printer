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
        let newCharacterData = {...characterData};
        newCharacterData[event.target.name] = event.target.value;

        setCharacterData(newCharacterData);
    }


    return (
        <div className={'main-container'}>
            <div className={'input-panel'}>
                <h1>Input Panel</h1>
                {/*<InputPanel handlerProp={handleChange}/>*/}
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
            <IdInputBox onChange={onChange}/>
            <AspectsInputBox onChange={onChange}/>
            <ApproachesInputBox/>
            <StuntsInputBox/>
            <StressInputBox/>
            <ConsequenceInputBox/>
        </>
    )
}

function IdInputBox({onChange}) {
    // let handler = handlerProp.handlerProp.handlerProp

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
            <input type="text" onChange={onChange} id="high-concept-aspect" name="high-concept-aspect"
                   placeholder="High Concept"/>
            <input type="text" onChange={onChange} id="trouble-aspect" name="trouble-aspect" placeholder="Trouble"/>
            <input type="text" onChange={onChange} id="additional-aspect1" name="trouble-aspect"/>
            <input type="text" onChange={onChange} id="additional-aspect2" name="additional-aspect2"/>
            <input type="text" onChange={onChange} id="additional-aspect3" name="additional-aspect3"/>
        </div>
    )

}

function ApproachesInputBox() {
    return (
        <div className={"approaches-input-box"}>
            <div className={"approaches-input-box-header input-header"}>Approaches</div>
            <label>Careful
                <input type="text" id="careful-approach" name="careful-approach"/>
            </label>
            <label>Clever
                <input type="text" id="clever-approach" name="clever-approach"/>
            </label>
            <label>Flashy
                <input type="text" id="flashy-approach" name="flashy-approach"/>
            </label>
            <label>Forceful
                <input type="text" id="forceful-approach" name="forceful-approach"/>
            </label>
            <label>Quick
                <input type="text" id="quick-approach" name="quick-approach"/>
            </label>
            <label>Sneaky
                <input type="text" id="sneaky-approach" name="sneaky-approach"/>
            </label>
        </div>
    )
}

function StuntsInputBox() {
    return <div className={"stunts-input-box"}>
        <div className={"stunts-input-box-header input-header"}>Stunts</div>
        <input type="text" id="stunts" name="stunts"/>
    </div>
}

function StressInputBox() {
    return <div className={"stress-input-box"}>
        <div className={"stress-input-box-header input-header"}>Stress</div>
        <input type="checkbox" id="stress1" name="stress1"/>
        <input type="checkbox" id="stress2" name="stress2"/>
        <input type="checkbox" id="stress3" name="stress3"/>
    </div>
}


function ConsequenceInputBox() {
    return <div className={"consequence-input-box"}>
        <div className={"consequence-input-box-header input-header"}>Consequences</div>
        <label>2
            <input type="text" id="consequence-input2" name="consequence-input2" placeholder="Mild"/>
        </label>
        <label>4
            <input type="text" id="consequence-input4" name="consequence-input4" placeholder="Moderate"/>
        </label>
        <label>6
            <input type="text" id="consequence-input6" name="consequence-input6" placeholder="Severe"/>
        </label>
    </div>
}


//  TODO сделать вывод инпута
function DisplayPanel({characterData}) {
    return (<div>Full json {JSON.stringify(characterData)}</div>
    )
}

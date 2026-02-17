import {useState} from 'react'
import './App.css'

function App() {
    const [characterData, setCharacterData] = useState({
        name: 'Misha',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur dolorem doloribus, eius hic mollitia quasi! Aliquam amet consectetur eius eos id incidunt nesciunt pariatur quas repellendus, vero voluptatem voluptatibus!',
        gender: 'Male',
        refresh: '3',
        currentPoints: '3',
        aspects: {
            highConcept: 'Superhero',
            trouble: 'Too smart',
            aspect1: 'Anya wife',
            aspect2: 'Flat owner',
            aspect3: 'Greatest Cook'
        },
        approaches: {
            careful: '3',      // +5
            clever: '5',       // +4
            flashy: '2',        // +3
            forceful: '1',        // +2
            quick: '1',      // +1
            sneaky: '1'
        },
        stunts: '        <>\n' +
            '            <div className={\'main-container\'}>\n' +
            '                <div className={\'input-panel\'}>\n' +
            '                    <h1>Input Panel</h1>\n' +
            '                    <InputPanel onChange={handleChange}/>\n' +
            '\n' +
            '                </div>\n' +
            '                <div className={\'display-panel\'}>\n' +
            '                    <h1>Display Panel</h1>\n' +
            '                    <DisplayPanel characterData={characterData}/>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '       ## Me\n' +
            'Why does my stunt print output does not make it print new lines, instead all text is squished? I have \\n special character for a new line\n' +
            '\n' +
            '## AI Assistant\n' +
            'In HTML (and therefore in React), newline characters (\\n) inside a normal element like <div> are treated as whitespace and collapsed. So your "line1\\nline2" renders like "line1 line2".\n' +
            'To make the browser render those newlines, you have two common options:\n' +
            '  pre-wrap     <PrintableSheet characterData={characterData}/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores pariatur soluta ullam! Commodi eligendi exercitationem fugit in iure? Ex fugiat iusto laborum nostrum officiis praesentium quod reprehenderit ullam voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut corporis cupiditate dolorem ducimus eius fugit, id illum ipsum iste laborum, minus molestiae nesciunt nihil praesentium quis recusandae totam!</>\n' +
            ' pre-wrap     <PrintableSheet characterData={characterData}/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores pariatur soluta ullam! Commodi eligendi exercitationem fugit in iure? Ex fugiat iusto laborum nostrum officiis praesentium quod reprehenderit ullam voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut corporis cupiditate dolorem ducimus eius fugit, id illum ipsum iste laborum, minus molestiae nesciunt nihil praesentium quis recusandae totam!</>\n' +
            ' pre-wrap     <PrintableSheet characterData={characterData}/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores pariatur soluta ullam! Commodi eligendi exercitationem fugit in iure? Ex fugiat iusto laborum nostrum officiis praesentium quod reprehenderit ullam voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut corporis cupiditate dolorem ducimus eius fugit, id illum ipsum iste laborum, minus molestiae nesciunt nihil praesentium quis recusandae totam!</>\n' +
            'pre-wrap     <PrintableSheet characterData={characterData}/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores pariatur soluta ullam! Commodi eligendi exercitationem fugit in iure? Ex fugiat iusto laborum nostrum officiis praesentium quod reprehenderit ullam voluptatem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut corporis cupiditate dolorem ducimus eius fugit, id illum ipsum iste laborum, minus molestiae nesciunt nihil praesentium quis recusandae totam!</>\n',
        stress: [true, true, true],

        consequences: {
            mild2: 'Подбит',
            moderate4: 'Голоден',
            severe6: 'Болит спина'
        }
    });

    function handleChange(event) {

        let newCharacterData = {...characterData};
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
        <>
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
            <PrintableSheet characterData={characterData}/></>
    )
}

export default App

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
    return <div className={"stunts-input-box"}>
        <div className={"stunts-input-box-header input-header"}>Stunts</div>
        <textarea onChange={onChange} rows={4} name="stunts"
                  placeholder={"1. Dangerously incompetent\n2. Halfling luck"}/>
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


// TODO page preview? Or even skip it altogether
function DisplayPanel({characterData}) {
    return (<div>Full json {JSON.stringify(characterData)}</div>
    )
}

function PrintableSheet({characterData}) {
    let approaches = Object.keys(characterData.approaches)

    function checkMarkStress(characterData) {
        return [
            <div className="stress1-print print-output">{characterData.stress[0] ? '✔' : ''}</div>,
            <div className="stress2-print print-output">{characterData.stress[1] ? '✔' : ''}</div>,
            <div className="stress3-print print-output">{characterData.stress[2] ? '✔' : ''}</div>
        ]
    }

    return <div className={"FAE-print"}>
        <div className={"name-print print-output"}> {characterData.name} </div>
        <div className={"description-print print-output"}> {characterData.description}</div>
        <div className={"pronouns-print print-output"}> {characterData.gender}</div>
        <div className="refresh-print print-output">{characterData.refresh}</div>
        <div className="current-points-print print-output">{characterData.currentPoints}</div>
        <div className="aspects-high-concept-print print-output">{characterData.aspects.highConcept}</div>
        <div className="aspects-trouble-print print-output">{characterData.aspects.trouble}</div>
        <div className="aspects-aspect1-print print-output">{characterData.aspects.aspect1}</div>
        <div className="aspects-aspect2-print print-output">{characterData.aspects.aspect2}</div>
        <div className="aspects-aspect3-print print-output">{characterData.aspects.aspect3}</div>

        {approaches.map(approach => <div
            className={`approaches-${approach}-print print-output`}>{characterData.approaches[approach]}</div>)}

        <div className="stunts-print print-output">{characterData.stunts}</div>
        {checkMarkStress(characterData)}
        <div className="consequences-mild2-print print-output">{characterData.consequences.mild2}</div>
        <div className="consequences-moderate4-print print-output">{characterData.consequences.moderate4}</div>
        <div className="consequences-severe6-print print-output">{characterData.consequences.severe6}</div>
    </div>


}

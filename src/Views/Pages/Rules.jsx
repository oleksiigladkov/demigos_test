import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import HttpActionsService from '../../Services/HttpActionsService';
import history from '../../Routing';
import { 
    DEFAULT_RULE,
    AVAILABLE_TYPES,
    RULE_SECTION_INCLUSION,
    RULE_SECTION_EXCLUSION,
    RULE_TYPE_PAGE,
    RULE_TYPE_CUSTOM,
    RULE_CUSTOM_TYPE, 
    RULE_CUSTOM_TYPE_EXACT,
    RULE_CUSTOM_TYPE_CONTAINS,
    // RULES_TYPE_INCLUSION 
} from '../../Config';

const Rules = () => {

    // TODO: init state from server config
    const [inclusionRules, setInclusion] = useState([]);
    const [exclusionRules, setExclusion] = useState([]);

    useEffect(() => {
        HttpActionsService.getDefaultRules().then(
            response => {
                if (response['ok'] && 200 === response['status']) {
                    response.json()
                        .then(data => {
                            setInclusion(data[RULE_SECTION_INCLUSION]);
                            setExclusion(data[RULE_SECTION_EXCLUSION]);
                        })
                        .catch((error) => {
                            history.push('/500');
                        });
                }
            })
            .catch((error) => {
                history.push('/500');
            });
    }, []);

    const getRulesStateConfig = (section = RULE_SECTION_EXCLUSION) => {
        if (RULE_SECTION_EXCLUSION === section) {
            return {
                rules: Array.from(exclusionRules),
                setRules: setExclusion
            }
        }
        return {
            rules: Array.from(inclusionRules),
            setRules: setInclusion
        }
    };

    const deleteRule = (section, r) => {
        const {rules, setRules} = getRulesStateConfig(section);
        rules.splice(r, 1);
        setRules(rules);
    };

    const addRule = (section) => {
        const {rules, setRules} = getRulesStateConfig(section);
        rules.push(DEFAULT_RULE);
        setRules(rules);
    };

    const changeRuleType = (e, section, rind) => {
        const value = e.target.value;
        const {rules, setRules} = getRulesStateConfig(section);
        rules[rind] = Object.assign(rules[rind], {
            type: RULE_TYPE_CUSTOM === value ? RULE_TYPE_CUSTOM : RULE_TYPE_PAGE,
            rule: value,
            url: '',
            exact: false
        });
        setRules(rules);
    };
    
    const changeCustomType = (e, section, ind) => {
        const value = e.target.value;
        const {rules, setRules} = getRulesStateConfig(section);
        rules[ind] = Object.assign(rules[ind], {
            exact: RULE_CUSTOM_TYPE_EXACT === value,
            url: ''
        });
        setRules(rules);
    };

    const focusBlurCustomUrl = (e) => {
        console.info(e);
        e.target.checkValidity();
        e.target.reportValidity();
    };

    const changeCustomUrl = (e, section, rind) => {
        const value = e.target.value;
        const {rules} = getRulesStateConfig(section);
        if (e.target.checkValidity()) {
            rules[rind].url = value;
        } else {
            e.target.reportValidity();
        }
    };
    
    const getCustomUrlExtraProps = (rule) => {
        const props = {
            type: "text",
            placeholder: "Type a full or partial URL",
            required: "required"
        }
        if (rule.exact) {
            // eslint-disable-next-line
            // props.pattern = `^((http(s){0,1}\:\/\/){0,1}([a-z|A-Z|0-9|\.|\-|_]){4,255}(\:\d{1,5}){0,1}){0,1}((\/([a-z|A-Z|0-9|\.|\-|_]|\%[A-F|a-f|0-9]{2}){1,255}){1,255}\/{0,1}){0,1}(|\/{0,1}\?[a-z|A-Z|0-9|\.|\-|_]{1,255}\=([a-z|A-Z|0-9|\.|\-|_|\+|\:]|\%[A-F|a-f|0-9]{2}|\&[a-z|A-Z]{2,12}\;){0,255}){0,1}((\&[a-z|A-Z|0-9|\.|\-|_]{1,255}\=([a-z|A-Z|0-9|\.|\-|_|\+|\:]|\%[A-F|a-f|0-9]{2}|\&[a-z|A-Z]{2,12}\;){0,255}){0,255})(\/{0,1}|\#([a-z|A-Z|0-9|\.|\-|_|\+|\:]|\%[A-F|a-f|0-9]{2}|\&[a-z|A-Z]{2,12}\;){0,255})$`;
            props.type = "url";
        }
        return props;
    };

    const getUniqKeyStamp = () => Math.random().toString(36).substr(2, 9);

    const sectionRender = (section) => {
        const {rules} = getRulesStateConfig(section);
        return (
        <div className="section inclusion">
            <p>Inclusion rules</p>
            <ul className="list">
                <li className="Where would you like to display your compain?"></li>
                {
                    rules.map((r, rInd) => {
                        return (
                            <li className="rule" key={`rInd${rInd}_${getUniqKeyStamp()}`}>
                                <select className="type" 
                                    defaultValue={r.rule}
                                    onChange={(e) => changeRuleType(e, section, rInd)}
                                >
                                    {AVAILABLE_TYPES.map(
                                        ((p, apInd) => <option value={p.acceptor} key={`${apInd}${p.acceptor}`}>{p.anchor}</option>)
                                    )}
                                </select>
                                {
                                    RULE_TYPE_CUSTOM === r.type 
                                    && <>
                                        <select className="" 
                                            onChange={(e) => changeCustomType(e, section, rInd)}
                                            defaultValue={r.exact ? RULE_CUSTOM_TYPE_EXACT : RULE_CUSTOM_TYPE_CONTAINS}>
                                            {RULE_CUSTOM_TYPE.map((rct, rctInd) => {
                                                return (
                                                    <option value={rct} key={`rct${rctInd}}`}>{rct}</option>
                                                )
                                            })}
                                        </select>
                                        {

                                        }
                                        <input 
                                            className="rule" 
                                            {...getCustomUrlExtraProps(r)} 
                                            defaultValue={r.url}
                                            onBlur={(e) => focusBlurCustomUrl(e)}
                                            onFocus={(e) => focusBlurCustomUrl(e)}
                                            onChange={(e) => changeCustomUrl(e, section, rInd)}
                                        />  
                                    </>
                                }
                                {/* {rules.length > 1 &&  */}
                                    <button className="delete" onClick={() => deleteRule(section, rInd)}></button>
                                {/* } */}
                            </li>
                        )
                    })
                }
            </ul>
            <div className="buttons">
                    <button onClick={() => addRule(section)}>+ New rule</button>      
            </div>    
        </div>
        );
    };
    
    return (
        <div className="rulesForm">
            <div className="title">
                Display rules
            </div>
            {sectionRender(RULE_SECTION_INCLUSION)}
            {sectionRender(RULE_SECTION_EXCLUSION)}
        </div>
        
    );
}

export default withRouter(Rules);
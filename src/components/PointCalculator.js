import { useState } from "react";
import ArrayInput from './ArrayInput';
import ArrayOutput from './ArrayOutput';
import OutputBox from './OutputBox';

function PointCalculator() {

    const [bonuses, setBonuses] = useState(new Array(6).fill(0));
    const [values, setValues] = useState(new Array(6).fill(8));
    const maxPoints = 27;

    const abilityScores =[];
    for (let i = 0; i < Math.min(bonuses.length, values.length); i++)
        abilityScores.push(bonuses[i] + values[i]);

    function addPlusSign(num) {
        if (num >= 0) return '+' + num;
        else return num.toString();
    }

    function calcModifier(score) {
        return Math.floor((score - 10) / 2);
    };

    function getPoints(value) {
        switch (value) {
            case 8: return 0;
            case 9: return 1;
            case 10: return 2;
            case 11: return 3;
            case 12: return 4;
            case 13: return 5;
            case 14: return 7;
            case 15: return 9;
            default: return null;
        }
    };

    const points = values.reduce((sum, current) => { return sum + getPoints(current) }, 0);

    function getBoxColor(points) {
        if (points < maxPoints) return '#FFFF00';
        if (points > maxPoints) return '#FF4500';

        return '#7CFC00';
    };

    return (
        <div className="content">
            <label>Score Bonuses</label>
            <ArrayInput min="0" max="3" values={bonuses} onChange={setBonuses} />
            <label>Base Scores</label>
            <ArrayInput min="8" max="15" values={values} onChange={setValues} />
            <div style={{ marginBottom: '1.2rem' }}>
                <label>Points: </label>
                <OutputBox value={points} color={getBoxColor(points)} />
                <label> / 27</label>
            </div>
            <label>Ability Scores</label>
            <ArrayOutput values={abilityScores} />
            <label>Ability Modefiers</label>
            <ArrayOutput values={abilityScores.map(score => addPlusSign(calcModifier(score)))} />
        </div>
    );
};

export default PointCalculator;
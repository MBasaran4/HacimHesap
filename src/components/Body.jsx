import React, { useState } from 'react';
import "./Body.css"

function Body() {
    const [widA, setWidA] = useState('');
    const [widB, setWidB] = useState('');
    const [hei, setHei] = useState('');
    const [rad, setRad] = useState('');
    const [shape, setShape] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handleShape = (e) => {
        setShape(e.target.value);
        // Clear inputs when shape changes
        setWidA('');
        setWidB('');
        setHei('');
        setRad('');
        setResult('');
        setLoading(false);
    }

    const hesapla = async () => {
        setLoading(true);

        if(shape === 'recPrism'){
            if(widA === '' || widA <= 0 || widB === '' || widB <= 0 || hei === '' || hei <= 0){
                setLoading(false);
                setResult('Lütfen geçerli değerler giriniz');
                return;
            }

            await pause(1000);
            const rslt = widA * widB * hei;
            setLoading(false);
            setResult(`Alan: ${rslt.toFixed(2)} cm³`);
            return;
        }else if(shape === 'cube'){
            if(widA === '' || widA <= 0){
                setLoading(false);
                setResult('Lütfen geçerli değerler giriniz');
                return;
            }

            await pause(1000);
            const rslt = widA * widA * widA;
            setLoading(false);
            setResult(`Alan: ${rslt.toFixed(2)} cm³`);
            return;
        }else if(shape === 'sphere'){
            if(rad === '' || rad <= 0){
                setLoading(false);
                setResult('Lütfen geçerli değerler giriniz');
                return;
            }

            await pause(1000);
            const rslt = 4 / 3 * 3.14 * rad * rad * rad; 
            setLoading(false);
            setResult(`Alan: ${rslt.toFixed(2)} cm³`);
            return;
        }else if(shape === 'cylender'){
            if(rad === '' || rad <= 0 || hei === '' || hei <= 0){
                setLoading(false);
                setResult('Lütfen geçerli değerler giriniz');
                return;
            }

            await pause(1000);
            const rslt = 3.14 * rad * rad * hei;
            setLoading(false);
            setResult(`Alan: ${rslt.toFixed(2)} cm³`);
            return;
        }else if(shape === 'cone'){
            if(rad === '' || rad <= 0 || hei === '' || hei <= 0){
                setLoading(false);
                setResult('Lütfen geçerli değerler giriniz');
                return;
            }

            await pause(1000);
            const rslt = 1/3 * 3.14 * rad * rad * hei;
            setLoading(false);
            setResult(`Alan: ${rslt.toFixed(2)} cm³`);
            return;
        }else if(shape === 'sqrPyramid'){
            if(widA === '' || widA <= 0 || hei === '' || hei <= 0){
                setLoading(false);
                setResult('Lütfen geçerli değerler giriniz');
                return;
            }

            await pause(1000);
            const rslt = (widA * widA * hei) / 2;
            setLoading(false);
            setResult(`Alan: ${rslt.toFixed(2)} cm³`);
            return;
        }else{
            setLoading(false);
            setResult('Lütfen bir şekil seçiniz');
            return;
        }
        
    }
return (
    <div>
    <h1 className='title'>HACİM HESAPLAMA</h1>
    <div className='form'>
        <div className='shape'>
            <label>
                <input 
                type="radio" 
                name='shape'
                value='recPrism'
                checked={shape === 'recPrism'}
                onChange={handleShape}
                required
                />  
                Dikdörtgenler Prizması
            </label>
            <label>
                <input 
                type="radio" 
                name='shape'
                value='cube'
                checked={shape === 'cube'}
                onChange={handleShape}
                required
                />
                Küp
            </label>
            <label>
                <input 
                type="radio" 
                name='shape'
                value='sphere'
                checked={shape === 'sphere'}
                onChange={handleShape}
                required
                />  
                Küre
            </label>
            <label>
                <input 
                type="radio" 
                name='shape'
                value='cylender'
                checked={shape === 'cylender'}
                onChange={handleShape}
                required
                />  
                Silindir
            </label>
            <label>
                <input 
                type="radio" 
                name='shape'
                value='cone'
                checked={shape === 'cone'}
                onChange={handleShape}
                required
                />  
                Koni
            </label>
            <label>
                <input 
                type="radio" 
                name='shape'
                value='sqrPyramid'
                checked={shape === 'sqrPyramid'}
                onChange={handleShape}
                required
                />  
                Kare Piramit
            </label>
        </div>
        

        {(shape === 'recPrism') && (
        <>
            <div className='form' id='widA'>
                <input 
                    className='input' 
                    type="number"
                    placeholder='Taban Uzunluğu (cm)'
                    step="0.1"
                    value={widA}
                    onChange={(e) => setWidA(e.target.value)}
                    required
                />
                <span className='input-border'></span>
            </div>
            <div className='form' id='widB'>
                <input 
                    className='input' 
                    type="number"
                    placeholder='Taban Genişliği (cm)'
                    step="0.1"
                    value={widB}
                    onChange={(e) => setWidB(e.target.value)}
                    required
                />
                <span className='input-border'></span>
            </div>
            <div className='form' id='hei'>
                <input 
                    className='input'
                    type="number" 
                    placeholder='Yükseklik (cm)'
                    step='0.1'
                    value={hei}
                    onChange={(e) => setHei(e.target.value)}
                    required
                />
                <span className='input-border'></span>
            </div>
        </>
        )}

        {(shape === 'cube') && (
        <>
            <div className='form' id='widA'>
            <input 
                className='input' 
                type="number"
                placeholder='Kenar Uzunluğu (cm)'
                step="0.1"
                value={widA}
                onChange={(e) => setWidA(e.target.value)}
                required
            />
            <span className='input-border'></span>
            </div>
        </>
        )}

        {shape === 'sphere' && (
            <>
                <div className='form' id='rad'>
                    <input 
                    className='input'
                    type="number" 
                    placeholder='Yarıçap (cm)'
                    step='0.1'
                    value={rad}
                    onChange={(e) => setRad(e.target.value)}
                    required
                    />
                    <span className='input-border'></span>
                </div>
            </>
        )}

        {shape === 'cylender' && (
            <>
                <div className='form' id='rad'>
                    <input 
                        className='input'
                        type="number" 
                        placeholder='Yarıçap (cm)'
                        step='0.1'
                        value={rad}
                        onChange={(e) => setRad(e.target.value)}
                        required
                    />
                    <span className='input-border'></span>
                </div>
                <div className='form' id='hei'>
                    <input 
                        className='input'
                        type="number" 
                        placeholder='Yükseklik (cm)'
                        step='0.1'
                        value={hei}
                        onChange={(e) => setHei(e.target.value)}
                        required
                    />
                    <span className='input-border'></span>
                </div>
            </>
        )}

        {shape === 'cone' && (
            <>
                <div className='form' id='rad'>
                    <input 
                    className='input'
                    type="number" 
                    placeholder='Yarıçap (cm)'
                    step='0.1'
                    value={rad}
                    onChange={(e) => setRad(e.target.value)}
                    required
                    />
                    <span className='input-border'></span>
                </div>
                <div className='form' id='hei'>
                    <input 
                        className='input'
                        type="number" 
                        placeholder='Yükseklik (cm)'
                        step='0.1'
                        value={hei}
                        onChange={(e) => setHei(e.target.value)}
                        required
                    />
                    <span className='input-border'></span>
                </div>
            </>
        )}

        {shape === 'sqrPyramid' && (
            <>
                <div className='form' id='widA'>
                    <input 
                    className='input'
                    type="number" 
                    placeholder='Taban Genişliği (cm)'
                    step='0.1'
                    value={widA}
                    onChange={(e) => setWidA(e.target.value)}
                    required
                    />
                    <span className='input-border'></span>
                </div>
                <div className='form' id='hei'>
                    <input 
                        className='input'
                        type="number" 
                        placeholder='Yükseklik (cm)'
                        step='0.1'
                        value={hei}
                        onChange={(e) => setHei(e.target.value)}
                        required
                    />
                    <span className='input-border'></span>
                </div>
            </>
        )}

        <button 
        className="button" 
        type="button" 
        onClick={hesapla} 
        disabled={loading}>
        {loading ? (
            <div className="spinner"></div>
        ) : ('Hesapla')}
        </button>
    </div>
    <div className='sonuc'>
        <div id='sonuc'>{result}</div>
    </div>
    </div>
);
}

export default Body

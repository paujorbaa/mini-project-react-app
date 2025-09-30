import React, { useState, useEffect } from 'react'
import information from "../data/information.json"
import { useNavigate } from 'react-router-dom';

const ApartmentForm = ({ apartment, onAdd }) => {
  const navigate = useNavigate();
  const infor=information.results[0];
  const initialKeys=Object.keys(infor);

  const initialState = initialKeys.reduce((objectAll,key)=>{
    const value = infor[key];
    objectAll[key] = Array.isArray(value)?[]
    :typeof value === 'string'?""
    :typeof value === 'number'?0
    :typeof value === 'boolean'?false
    :typeof value ===  null?null
    :""
    return objectAll;
  },{});




  const [formData,setFormData]=useState(initialState);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange=(e)=>{
  const { name,type,checked,value }=e.target;
  setFormData({...formData,[name]:type==='checkbox'?checked
    :type==='number'?Number(value)
    :value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const { id, ...payload } = formData;
    onAdd(payload);
    setFormData(initialState);
    navigate("/");
  }

    useEffect(() => {
    if (document.getElementById('apt-form-style')) return
    const style = document.createElement('style')
    style.id = 'apt-form-style'
    style.innerHTML = APT_FORM_CSS
    document.head.appendChild(style)  
  }, [])

  if (!showForm) {
    return (
      <main className="apt-page" style={{ textAlign: 'center' }}>
        <h1 className="apt-hero__title">Apartment Manager</h1>
        <p className="apt-hero__subtitle">Click the button to enter the full-page form</p>
        <button className="apt-btn" onClick={() => setShowForm(true)}>Add Apartment</button>
      </main>
      
    )
  }

  return (
    <>
   <main className="apt-page">
  <div style={{ marginBottom: 16 }}>
    <button className="apt-btn apt-btn--ghost" onClick={() => setShowForm(false)}>← Back</button>
  </div>

  <div className="apt-card apt-form">
    <div className="apt-hero" style={{ textAlign: "left", marginBottom: 12 }}>
      <h2 className="apt-hero__title" style={{ fontSize: 28, margin: 0 }}>Add an Apartment</h2>
      <p className="apt-hero__subtitle" style={{ marginTop: 6 }}>Fill in the listing details below.</p>
    </div>

    <form onSubmit={handleSubmit}>
      <div className="apt-grid">
        <div className="apt-field apt-field--full">
          <label className="apt-label">Name</label>
          <input
            className="apt-input"
            name="name"
            type="text"
            placeholder="Apartment name"
            value={formData.name ?? ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="apt-field apt-field--full">
          <label className="apt-label">Picture URL</label>
          <input
            className="apt-input"
            name="picture_url"
            type="text"
            placeholder="https://…"
            value={formData.picture_url ?? ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="apt-field apt-field--full">
          <label className="apt-label">Description</label>
          <input
            className="apt-input"
            name="description"
            type="text"
            placeholder="Short description"
            value={formData.description ?? ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="apt-field apt-field--full">
          <label className="apt-label">Neighborhood</label>
          <input
            className="apt-input"
            name="neighbourhood_overview"
            type="text"
            placeholder="Neighborhood overview"
            value={formData.neighbourhood_overview ?? ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="apt-field">
          <label className="apt-label">Host</label>
          <input
            className="apt-input"
            name="host_name"
            type="text"
            placeholder="Host name"
            value={formData.host_name ?? ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="apt-field apt-field--check">
          <input
            className="apt-checkbox"
            id="isSuperhost"
            name="host_is_superhost"
            type="checkbox"
            checked={!!formData.host_is_superhost}
            onChange={handleInputChange}
          />
          <label className="apt-label" htmlFor="isSuperhost">Superhost</label>
        </div>

        <div className="apt-field apt-field--full">
          <label className="apt-label">Host Location</label>
          <input
            className="apt-input"
            name="host_location"
            type="text"
            placeholder="City, Country"
            value={formData.host_location ?? ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="apt-field">
          <label className="apt-label">Price / Night</label>
          <input
            className="apt-input"
            name="price"
            type="number"
            min={0}
            placeholder="e.g. 120"
            value={formData.price ?? 0}
            onChange={handleInputChange}
          />
        </div>

        <div className="apt-field">
          <label className="apt-label">Room Type</label>
          <input
            className="apt-input"
            name="room_type"
            type="text"
            placeholder="Entire place / Private room"
            value={formData.room_type?? ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="apt-field">
          <label className="apt-label">Accommodates</label>
          <input
            className="apt-input"
            name="accommodates"
            type="number"
            min={1}
            placeholder="e.g. 4"
            value={formData.accommodates ?? ''}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="apt-actions">
        <button type="button" className="apt-btn apt-btn--ghost" onClick={() => setShowForm(false)}>Cancel</button>
        <button type="submit" className="apt-btn">Submit</button>
      </div>
    </form>
  </div>
</main>
    </>
  )
}

export default ApartmentForm








const APT_FORM_CSS = `
:root{
  --apt-bg: #f8fafc;
  --apt-card:#ffffff;
  --apt-border:#e2e8f0;
  --apt-text:#0f172a;
  --apt-muted:#64748b;
  --apt-ring: rgba(15,23,42,0.12);
  --apt-shadow: 0 10px 20px rgba(15,23,42,0.06);
}

*{box-sizing:border-box}

body{background:var(--apt-bg);}

.apt-page{
  min-height:100dvh;
  padding:48px 20px 80px;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 60%);
  color:var(--apt-text);
}

.apt-hero{
  max-width:900px;
  margin:0 auto 24px auto;
  text-align:center;
}
.apt-hero__title{
  font-size:clamp(28px, 4vw, 40px);
  font-weight:800;
  letter-spacing:-0.02em;
  margin:0 0 8px 0;
}
.apt-hero__subtitle{
  color:var(--apt-muted);
  margin:0 auto;
  max-width:680px;
  line-height:1.6;
}

.apt-card{
  background:var(--apt-card);
  border:1px solid var(--apt-border);
  border-radius:16px;
  box-shadow: var(--apt-shadow);
}

.apt-form{
  max-width:900px;
  margin:24px auto 0;
  padding:24px;
}

.apt-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px 20px;
}
@media (max-width: 720px){
  .apt-grid{ grid-template-columns:1fr; }
}

.apt-field{ display:flex; flex-direction:column; gap:8px; }
.apt-field--full{ grid-column:1 / -1; }
.apt-field--check{
  flex-direction:row; align-items:center; gap:10px;
}

.apt-label{
  font-size:14px; font-weight:600; color:var(--apt-text);
}

.apt-input{
  width:100%;
  border:1px solid var(--apt-border);
  border-radius:12px;
  padding:10px 12px;
  outline:none;
  background:#fff;
  color:var(--apt-text);
  transition: box-shadow .15s ease, border-color .15s ease;
}
.apt-input::placeholder{ color:#94a3b8; }
.apt-input:focus{
  border-color:#cbd5e1;
  box-shadow: 0 0 0 4px var(--apt-ring);
}

.apt-checkbox{
  width:18px; height:18px;
  border:1px solid var(--apt-border);
  border-radius:6px;
}

.apt-actions{
  display:flex; gap:12px; justify-content:flex-end;
  margin-top:18px;
}
.apt-btn{
  appearance:none; border:0; cursor:pointer;
  background:#0f172a; color:#fff; font-weight:600;
  padding:10px 16px; border-radius:12px;
  transition: transform .04s ease, background .2s ease, box-shadow .2s ease;
  box-shadow: 0 6px 16px rgba(15,23,42,0.18);
}
.apt-btn:hover{ background:#111827; }
.apt-btn:active{ transform: translateY(1px); }
.apt-btn--ghost{
  background:transparent; color:var(--apt-text);
  border:1px solid var(--apt-border);
  box-shadow:none;
}
.apt-btn--ghost:hover{ background:#f8fafc; }

.apt-list{
  max-width:1100px;
  margin:36px auto 0;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:18px;
}
@media (max-width: 960px){
  .apt-list{ grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px){
  .apt-list{ grid-template-columns: 1fr; }
}

.apt-card--item{ overflow:hidden; }
.apt-card__img{
  width:100%; height:180px; object-fit:cover; display:block;
  background:#f1f5f9;
}
.apt-card__img--placeholder{
  display:flex; align-items:center; justify-content:center;
  color:#94a3b8; font-size:14px;
}
.apt-card__body{ padding:14px 14px 16px; }
.apt-card__title{ margin:0 0 6px; font-size:16px; font-weight:700; }
.apt-card__desc{ margin:0; color:var(--apt-muted); font-size:14px; line-height:1.5; height:42px; overflow:hidden; }
.apt-card__meta{
  display:flex; justify-content:space-between; align-items:center;
  margin-top:10px; font-weight:600; font-size:14px; color:#0f172a;
}
`;
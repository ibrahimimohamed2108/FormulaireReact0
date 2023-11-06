import React from 'react';
import './MyReactCSS.css';

export const Home = () => {
  return (
    <div >
      <div>    <div className="background background0"></div>
<div className="background background1"></div>
<div className="background background2"></div>
<div className="background background3"></div>
<div className="background background4"></div>
<div className="background background5"></div>
<div className="background background6"></div>
<div className="background background7"></div>
<div className="criterion">
  <div className="text text0">W</div>
  <div className="text text1">e</div>
  <div className="text text2">l</div>
  <div className="text text3">c</div>
  <div className="text text4">o</div>
  <div className="text text5">m</div>
  <div className="text text6">e</div>
  <div className="text text7">: )</div>
  <div className="frame frame0"></div>
  <div className="frame frame1"></div>
  <div className="frame frame2"></div>
  <div className="frame frame3"></div>
  <div className="frame frame4"></div>
  <div className="frame frame5"></div>
  <div className="frame frame6"></div>
  <div className="frame frame7"></div>
  <div className="particle particle00"></div>
  <div className="particle particle01"></div>
  <div className="particle particle02"></div>
  <div className="particle particle03"></div>
  <div className="particle particle04"></div>
  <div className="particle particle05"></div>
  <div className="particle particle06"></div>
  <div className="particle particle07"></div>
  <div className="particle particle08"></div>
  <div className="particle particle09"></div>
  <div className="particle particle010"></div>
  <div className="particle particle011"></div>
  <div className="particle particle10"></div>
  <div className="particle particle11"></div>
  <div className="particle particle12"></div>
  <div className="particle particle13"></div>
  <div className="particle particle14"></div>
  <div className="particle particle15"></div>
  <div className="particle particle16"></div>
  <div className="particle particle17"></div>
  <div className="particle particle18"></div>
  <div className="particle particle19"></div>
  <div className="particle particle110"></div>
  <div className="particle particle111"></div>
  <div className="particle particle20"></div>
  <div className="particle particle21"></div>
  <div className="particle particle22"></div>
  <div className="particle particle23"></div>
  <div className="particle particle24"></div>
  <div className="particle particle25"></div>
  <div className="particle particle26"></div>
  <div className="particle particle27"></div>
  <div className="particle particle28"></div>
  <div className="particle particle29"></div>
  <div className="particle particle210"></div>
  <div className="particle particle211"></div>
  <div className="particle particle30"></div>
  <div className="particle particle31"></div>
  <div className="particle particle32"></div>
  <div className="particle particle33"></div>
  <div className="particle particle34"></div>
  <div className="particle particle35"></div>
  <div className="particle particle36"></div>
  <div className="particle particle37"></div>
  <div className="particle particle38"></div>
  <div className="particle particle39"></div>
  <div className="particle particle310"></div>
  <div className="particle particle311"></div>
  <div className="particle particle40"></div>
  <div className="particle particle41"></div>
  <div className="particle particle42"></div>
  <div className="particle particle43"></div>
  <div className="particle particle44"></div>
  <div className="particle particle45"></div>
  <div className="particle particle46"></div>
  <div className="particle particle47"></div>
  <div className="particle particle48"></div>
  <div className="particle particle49"></div>
  <div className="particle particle410"></div>
  <div className="particle particle411"></div>
  <div className="particle particle50"></div>
  <div className="particle particle51"></div>
  <div className="particle particle52"></div>
  <div className="particle particle53"></div>
  <div className="particle particle54"></div>
  <div className="particle particle55"></div>
  <div className="particle particle56"></div>
  <div className="particle particle57"></div>
  <div className="particle particle58"></div>
  <div className="particle particle59"></div>
  <div className="particle particle510"></div>
  <div className="particle particle511"></div>
  <div className="particle particle60"></div>
  <div className="particle particle61"></div>
  <div className="particle particle62"></div>
  <div className="particle particle63"></div>
  <div className="particle particle64"></div>
  <div className="particle particle65"></div>
  <div className="particle particle66"></div>
  <div className="particle particle67"></div>
  <div className="particle particle68"></div>
  <div className="particle particle69"></div>
  <div className="particle particle610"></div>
  <div className="particle particle611"></div>
  <div className="particle particle70"></div>
  <div className="particle particle71"></div>
  <div className="particle particle72"></div>
  <div className="particle particle73"></div>
  <div className="particle particle74"></div>
  <div className="particle particle75"></div>
  <div className="particle particle76"></div>
  <div className="particle particle77"></div>
  <div className="particle particle78"></div>
  <div className="particle particle79"></div>
  <div className="particle particle710"></div>
  <div className="particle particle711"></div>
</div></div>
      <header><h1 style={{ textAlign: 'center' }}>Formulaire du CV</h1></header>
      <form id="cvForm">
        <fieldset>
          <legend>Identité</legend>
          <label>Nom</label>
          <input type="text" id="nom" placeholder="Saisir votre Nom" required />
          <label>Prénom</label>
          <input type="text" id="prénom" placeholder="Saisir votre Prénom" required />
        </fieldset>
        <fieldset>
          <legend>Genre</legend>
          <input type="radio" name="Genre" id="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="Genre" id="female" />
          <label htmlFor="female">Femme</label>
        </fieldset>
        <fieldset>
          <legend>Informations personnelles</legend>
          <label>Numéro du téléphone</label>
          <input type="text" id="numerodutéléphone" placeholder="+212..." required />
          <label>Adresse</label>
          <input type="text" placeholder="Saisir votre Adresse" required />
          <label>Email</label>
          <input type="email" id="email" placeholder="Saisir votre eMail" required />
          <label htmlFor="birthday">Choisir votre date de naissance:</label>
          <input type="date" id="birthday" name="Date de naissance" />
        </fieldset>
        <fieldset>
          <legend>Objectifs</legend>
          <label>Que souhaites-vous</label>
          <textarea placeholder="Vos Objectifs"></textarea>
        </fieldset>
        <fieldset>
          <legend>Diplômes</legend>
          <select>
            <option>Ingenieur D'état</option>
            <option>Master</option>
            <option>Bachelor</option>
            <option>Doctorant</option>
            <option>DUT,DEUG</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Compétences Techniques</legend>
          <label>Que savez vous faire?</label>
          <textarea placeholder="Vos Compétences techniques"></textarea>
        </fieldset>
        <fieldset>
          <legend>Centres d'interets</legend>
          <input type="checkbox" id="ai" />
          <label htmlFor="ai">AI</label>
          <input type="checkbox" id="cybersecurity" />
          <label htmlFor="cybersecurity">Cybersecurity</label>
          <input type="checkbox" id="software" />
          <label htmlFor="software">Software</label>
          <input type="checkbox" id="systèmes-embarqués" />
          <label htmlFor="systèmes-embarqués">Systèmes Embarqués</label>
          <input type="checkbox" id="data" />
          <label htmlFor="data">Data</label>
          <input type="checkbox" id="autres" />
          <label htmlFor="autres">Autres</label>
        </fieldset>
        <fieldset>
          <legend>Langues Maitrisées</legend>
          <input type="checkbox" id="arabe" />
          <label htmlFor="arabe">Arabe</label>
          <input type="checkbox" id="anglais" />
          <label htmlFor="anglais">Anglais</label>
          <input type="checkbox" id="français" />
          <label htmlFor="français">Français</label>
          <input type="checkbox" id="allemand" />
          <label htmlFor="allemand">Allemand</label>
          <input type="checkbox" id="japonais" />
          <label htmlFor="japonais">Japonais</label>
          <input type="checkbox" id="autres-langues" />
          <label htmlFor="autres-langues">Autres</label>
        </fieldset>
        <fieldset>
          <legend>Message</legend>
          <label>Message</label>
          <textarea placeholder="Description"></textarea>
        </fieldset>
        <fieldset>
          <legend>Photo</legend>
          <label>Télécharger votre photo</label>
          <input type="file" />
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
      <hr />
    </div>
  );
};

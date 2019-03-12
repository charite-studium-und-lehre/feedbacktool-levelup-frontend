import React from 'react';
import ConsultingCard from "./ConsultingCard"
import "./Consulting.css";
import {Link, NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLock, faEnvelope, faSignInAlt, faDivide } from '@fortawesome/free-solid-svg-icons'


export default function Consulting (props) {
    return (
        <div className="container-fluid">
            <div className="row consulting" >
                <div className="col-md-5">
                    <div className="consulting-foto">
                    </div>
                </div>
                <div className="col-md-5 consulting-text">
                    <h1>Charitè Beratung</h1>
                    <p>Im Laufe des Studiums wirst du sicherlich schon einige
                         Situationen erlebt haben in denen du einen professionellen Rat zu den
                         diversen Themen des Studienalltags gebraucht hättest.  Damit du immer gut informiert bist, wer dir in der jeweiligen
                          Situation weiterhelfen kann, haben wir auf dieser Seite einige hilfreiche Beratungsangebote der Charitè zusammengefasst.

                         Charitè zusammengefasst.

                        Du erhältst hier eine Übersicht samt Links zu den Beratungsangeboten. Falls du dringend Unterstützung und einen
                        vertrauensvollen  Ansprechpartner für eventuelle Probleme im Studium benötigst, dann wende dich direkt per Mail an:
                            medicoach@charite.de
                          </p>
                     <button type="button" className="btn btn-primary">Mehr erfahren</button>
                </div>
                <div className="col-md-2">
                    <div className="consulting-link">
                    <ul className="list-group list-group-flush ">
                    <h4 className="text-center">Externe Beratung</h4>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                 
                   
                    </ul>
                    </div>
                </div>
            </div>
            <div  className=" consulting-card">
            <h1 className="text-center">Beratung</h1>
            <div className="row consulting-card">
                <ConsultingCard
                    title="MediCoach"
                    paragraph="MediCoach bietet  Ihnen ein individuelles, kostenloses, lösungsorientiertes Coaching zur Unterstützung stressbelasteter Studierender im Rahmen Ihres Studiums an der Charité Universitätsmedizin Berlin an. Neben Einzelcoachings können Sie auch in einer in jedem Semester angebotenen Coachinggruppe gemeinsam mit Ihren Kommiliton*innen Lösungen für Probleme im Studium entwickeln."
                    name1="Dipl.-Soz. Silke Boehm"
                    name2="Dipl.-Soz. Sylvie Tappert"
                    tel=" +49 30 450 529189"
                    email1="medicoach@charite.de" 
                    email2={null} 
                    email23={null} 
                    address="Luisenstr 57 CCM "
                    talk=" Gespräch nach Terminvereinbarung"
                   
                 />
                <ConsultingCard
                    title="Familienbüro"
                    paragraph="Sie studieren an der Charité und betreuen Kinder? Sie suchen einen Kitaplatz? Sie pflegen Angehörige? Sie haben Fragen und benötigen Informationen rund um das Thema Vereinbarkeit von Studium und Familie?"
                    name1="Sabine Barleben(Leitung)"
                    name2="Stefanie Schmidt(Sekretariat)"
                    tel="+49 030 450 577 257"
                    email1="familienbuero@charite.de"
                    email2=" Betriebliche Sozialberatung:  über cindy.stoklossa@charite.de"
                    email3="Väterbeauftragte:  vaeterbeauftragte@charite.de"
                    address="Westring 1, 1. Etage, R1.1011 CVK"
                    talk="CVK: dienstags von 11:00 bis 13:00 Uhr, Gästehaus R.0.0120
                    CCM: mittwochs von 11:00 bis 13:00 Uhr, Hufelandweg 2, EG, Raum 56|57 
                    "
                />
                 <ConsultingCard 
                    title="ChiC"
                    paragraph="ChiC bietet Informationen und Unterstützung rund um die Themen Studieren im Ausland bzw. aus dem Ausland und Unterstützung von internationalen Studierenden in Berlin."
                    name1="Lutz Steiner(Leitung)"
                    name2="Marta Gogluska-Obirek(Erasmus outgoing)  Angelika Cernitori(Programmstudierende aus d. Ausland, international grundständige Studierende)"
                    tel="+49 30 450 576 088 (Lutz Steiner, Leitung)"
                    email1="erasmixpaten@charite.de" 
                    address="Reinhardtstr. 58, CCM"
                    talk=""
                />
                 <ConsultingCard
                   title="Peer Mentoring"
                   paragraph="Das Peer-Mentoring-Programm richtet sich an Studienanfängerinnen und -anfänger im ersten und zweiten Semester und soll der Orientierung am Studienbeginn dienen. Hierzu finden regelmäßige Treffen zwischen Mentor bzw. Mentorin und Mentees statt."
                   name1="Pinkus Tober-Lau"
                   name2=""
                   tel="+49 30 450 577 259"
                   email1="XXXX@charite.de " 
                   address="Virchowweg 24, Aufgang B, 2. Etage, R02.002, CCM"
                   talk=""
                />
                 <ConsultingCard 
                    title="Student Mentoring"
                    paragraph="+49 30 450 576 091Das Team des Mentoringprogramms unterstützt Studierende der Charité – Universitätsmedizin Berlin, ihr Studium erfolgreich und zielstrebig zu absolvieren. Im Mentoringprogramm werden Studierenden engagierte Ärztinnen und Ärzte als Mentor*innen vermittelt."
                    name1="Petra Meinhardt(Leitung)"
                    name2=""
                    tel="+49 30 450 576 091"
                    email1="studentmentoring@charite.de Petra Meinhardt(Leitung)" 
                    address="Hannoversche Straße 19, 3. Etage, CCM"
                    talk=""
                />
                 <ConsultingCard 
                    title="Fachschaft(FSI Medizin)"
                    paragraph="Die Fachschaftsinitiative ist die Interessenvertretung der Medizinstudierenden an der Charité Universitätsmedizin Berlin. Unter dem Dach der FSI arbeiten zahlreiche Arbeitsgruppen. Darüber hinaus ist die FSI in nahezu allen Gremien an der Charité vertreten. "
                    name1="Stella Berboth, Theodor Kempe (beide Sprecher)"
                    name2=""
                    tel="+49 30 450 576050"
                    email1="sprecher@fsi-charite.de" 
                    address="Philippstraße 12, “Hexenhaus”, CCM"
                    talk=""
                />
                 <ConsultingCard 
                    title="Referat für Studienangelegenheiten"
                    paragraph="Hier erhalten Sie Informationen und Beratung zu allen allgemeinen und organisatorischen Fragen in puncto Studium."
                    name1="Petra Meinhardt(Leitung)"
                    name2=""
                    tel="+49 30 450 576 042 "
                    email1="petra.meinhardt@charite.de" 
                    address="Hannoversche Str. 19, 3.OG"
                    talk="Mo-Fr 09:00-12:00, Mo-Do 13:00-16:00(Telefonisch)
                          Di, Do, Fr: 9:30-12:30, Di 13:30-16:00(Sprechzeiten)"
                />
                 <ConsultingCard 
                    title="Frauen- und Gleichstellungsbeauftragte"
                    paragraph="Hier werden Sie aktuell über alle wichtigen Aktivitäten, Maßnahmen und Veranstaltungen informiert, die für die Gleichstellung von Frauen und Männern an der Charité unternommen werden. Unsere Handlungsfelder sind dabei sehr breit gefächert und umfassen Themen wie Karriereplanung, Diversity oder Vereinbarkeit von Familie und Beruf"
                    name1="Dr. Christine Kurmeyer"
                    name2=""
                    tel="+49 30 450 577 252"
                    email1="" 
                    address="Westring 1, CVK"
                    talk=""
                   
                />
                 <ConsultingCard 
                    title="Geschäftsstelle für gute wissenschaftliche Praxis"
                    paragraph="Die Geschäftsstelle Gute wissenschaftliche Praxis berät bei methodischen Fragen, beispielsweise bei Fragen der Datenerhebung, Bildbearbeitung und der statistischen Auswertung, oder vermittelt den Kontakt zu Expertinnen und Experten die weiterhelfen."
                    name1="Claudia Mathan"
                    name2=""
                    tel="+49 30 450 576 056"
                    email1="gwp@charite.de" 
                    address=""
                    talk=""
                />

            </div>
            </div>
        </div>
    )

}








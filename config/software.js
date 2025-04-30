/* eslint-disable no-inner-declarations, no-nested-ternary, no-sequences, no-unused-vars */

function files(args) {
  return [
    "<p><strong>Available files on this terminal:</strong></p>",
    "<pre>Report.csv\nDisciplinary_Memos.docx\nExternalReports\nInternalDocs\nSuspiciousActivity\nIncidentReport\nAuditTeam\nReactor Access Codes\nHR_LegalPrecedent_LAPD.msg</pre>"
  ];
}

function read(args) {
  if (!args || args.length === 0) {
    return "<p>Please specify a file to read. Example: <code>read Report.csv</code></p>";
  }

  const fileName = args.join(" ").toLowerCase();

  const fileContents = {
    "report.csv": `
<pre><strong>File: Report.csv</strong>

<span class="desync">Staff Observations:</span>

Harry Dawson seen exiting engineering sector twice during off-shift hours.

Kent observed conversing with Goldman for 13 minutes in mess—<span class="hack-reveal">unusual contact duration</span>.</pre>`,

    "disciplinary_memos.docx": `
<pre><strong>File: Disciplinary_Memos.docx</strong>

• Roy Bates: reprimanded for “attitude” during inspection.
• Pete Shead: caught smoking on observation platform. <span class="desync">Reassigned.</span>
• Greer: excessive time in drill control. Suspicious. May need closer watch.

<span class="hack-reveal">Comment added Jan 30:</span>
“Going to draft broader loyalty policy. These civvies are soft. Too much talking.”</pre>`,

    "externalreports": `
<pre><strong>File: ExternalReports</strong>

<span class="desync">To:</span> ops-direct@fortudo-energy.com
<span class="desync">From:</span> dstahl@devilshole

<span class="hack-reveal">Subject: Site Perimeter Security</span>

Situation remains under control. No breaches.
Crew generally compliant, though morale may dip without firmer discipline.
I continue to recommend we arm more personnel. It’s just common sense.

Audit Team arriving soon. Not a fan. There is no need for them to be here.</pre>`,

    "internaldocs": `
<pre><strong>File: InternalDocs</strong>

<span class="desync">If Rig is compromised, initiate Protocol Blackout:</span>

- Activate Cell Signal jammer (In gun cabinet)
- Assign two men to lifeboat Guard Duty
- Secure control room with 3-man team
- Detain any civilians attempting to leave

<span class="hack-reveal">Do NOT wait for Roylott’s sign-off if situation escalates</span></pre>`,

    "suspiciousactivity": `
<pre><strong>File: SuspiciousActivity</strong>

<span class="desync">People to Watch:</span>

- Teagan (too quiet)
- Slocum (drinks too much, probably listening)
- Kent (used to push back, now weirdly compliant)
- Goldman (soft—probable liability)
- Audit Team (unknown loyalty)</pre>`,

    "incidentreport": `
<pre><strong>File: IncidentReport</strong>

<span class="desync">Summary:</span>
At 18:34, a physical altercation occurred in the upper mess between Vance Norris (Security) and Richard Copper (Crane Operator).
Witnesses state Copper made derogatory remarks about Norris’s performance during the last inspection. Norris responded by <strong>breaking Copper’s nose</strong>.

<span class="hack-reveal">Action Taken:</span>
Both men placed on rotating shifts pending further review.

<span class="hack-reveal">Note to File:</span>
Norris is volatile. Should have been rotated weeks ago. Crew stress at boiling point.</pre>`,

    "auditteam": `
<pre><strong>File: AuditTeam</strong>

<span class="desync">Subjects:</span> “Audit Team”
<span class="desync">Assigned Liaison:</span> Nigel Gordon

<span class="hack-reveal">Initial Observations:</span>
Too many questions for civilians.
Repeated presence in sensitive zones.

Nigel instructed to shadow them casually. Any breach of protocol: <strong>detain.</strong></pre>`,

    "reactor access codes": `
<pre><strong>File: Reactor Access Codes</strong>

<span class="hack-reveal">On Roylott’s order, Nuclear Reactor Control System password changed.</span>

<span class="desync">New Code:</span> <strong>8283</strong>

No prior notice given. This is a breach of Fortudo SOP 12-C.

<span class="hack-reveal">Note to File:</span>
I don’t like being locked out of systems I’m paid to protect.</pre>`,

    "hr_legalprecedent_lapd.msg": `
<pre><strong>File: HR_LegalPrecedent_LAPD.msg</strong>

<span class="desync">From:</span> HRLegal@lapd.gov
<span class="desync">To:</span> dstahl@lapd.net
<span class="desync">Date:</span> August 22, 2023

Mr. Stahl,

This is formal notice of the Department’s acceptance of your resignation in lieu of ongoing litigation.
The City has reached an out-of-court settlement with the Barnes family.

<span class="hack-reveal">You are to cease contact with all former department personnel and refrain from identifying as a member of LAPD in any professional capacity.</span>

—Dept. of Internal Affairs</pre>`
  };

  return fileContents[fileName] || `<p>No such file found: <strong>${args.join(" ")}</strong></p>`;
}

// Register both commands explicitly if required
window.files = files;
window.read = read;

function search(args) {
const keyword = args.join(' ').toLowerCase();
const results = {}; // Empty index
for (const [key, output] of Object.entries(results)) {
if (keyword.includes(key)) return output;
}
return <p>No results found for keyword: <strong>${keyword}</strong></p>;
}

function help(args) {
return `

<p>You can read the help of a specific command by entering as follows: <code>'help commandName'</code></p>  
<p><strong>List of useful commands:</strong></p>  
<pre>  
clear   date   exit   help   mail   files   read  
</pre>  
<p>You can navigate in the commands usage history using the UP & DOWN arrow keys.</p>  
<p>The TAB key will provide command auto-completion.</p>`;  
}  // Other commands like decrypt, identify, artifact, etc. can remain as-is unless you want them updated.

function decrypt(args) {
if (args.length === 0) {
return "<p>Some encrypted text must be provided: <code>decrypt 53CR3T T3XT</code></p>";
}
const textInClear = rot13(args.join(" "));
return <p class="hack-reveal">${textInClear}</p>;
}

function rot13(s) {
return s.replace(/[a-zA-Z]/g, (c) =>
String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
);
}

function identify() {
const introMsg = [
"What is this?",
<img src="https://thisartworkdoesnotexist.com/?${performance.now()}" style="width: 10rem; max-width: 100%;">
];
return {
message: introMsg,
onInput(answer) {
return Wrong! This is not "${answer}";
}
};
}

function artifact(args) {
if (args.length === 0) {
return [
"<p>An ID must be provided: <code>artifact $id</code></p>",
You currently have access to the following artifacts: ${Object.keys(DWEETS).join(" ")}
];
}
const artifactId = args[0];
const artifactDweet = DWEETS[artifactId];
if (!artifactDweet) {
return You do not have access to the artifact with ID ${artifactId};
}
return artifactDweet();
}

const DWEETS = {
888: () => dweet((t, x) => {
for (let i = 0; i < 300; i++) {
for (let j = 0; j < 6; j++) {
x.fillRect(100 + 66 * C(i) * S(T(t / 1.1) + j / i), 100 + 66 * S(i), 2, 2);
}
}
}),
1829: () => dweet((t, x) => {
for (let i = 16; i--;) {
x.ellipse(
100 + 60 * S(t + i * 0.1),
100 + 10 * C(t + i * 0.1),
32 * S(-i * 0.5) + 32,
10 * S(i * 0.1) + 1,
1.6 + 0.5 * S(t * 0.5),
9.5,
0,
true
);
}
x.stroke();
})
// Additional dweets can be added here
};


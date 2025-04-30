function files() {
  return Promise.resolve([
    "<p><strong>Available files on this terminal:</strong></p>",
    "<pre>Report.csv\nDisciplinary_Memos.docx\nExternalReports\nInternalDocs\nSuspiciousActivity\nIncidentReport\nAuditTeam\nReactor Access Codes\nHR_LegalPrecedent_LAPD.msg</pre>"
  ]);
}

function read(args) {
  return new Promise((resolve) => {
    if (!args || args.length === 0) {
      return resolve("<p>Please specify a file to read. Example: <code>read Report.csv</code></p>");
    }

    const fileName = args.join(" ").toLowerCase();
    const fileContents = {
      "report.csv": `<pre><strong>File: Report.csv</strong>
<span class="desync">Staff Observations:</span>
Harry Dawson seen exiting engineering sector twice during off-shift hours.
Kent observed conversing with Goldman for 13 minutes in mess—<span class="hack-reveal">unusual contact duration</span>.</pre>`,

      "disciplinary_memos.docx": `<pre><strong>File: Disciplinary_Memos.docx</strong>
• Roy Bates: reprimanded for “attitude” during inspection.
• Pete Shead: caught smoking on observation platform. <span class="desync">Reassigned.</span>
• Greer: excessive time in drill control. Suspicious. May need closer watch.
<span class="hack-reveal">Comment added Jan 30:</span> “Going to draft broader loyalty policy. These civvies are soft. Too much talking.”</pre>`,

      "externalreports": `<pre><strong>File: ExternalReports</strong>
<span class="desync">To:</span> ops-direct@fortudo-energy.com
<span class="desync">From:</span> dstahl@devilshole
<span class="hack-reveal">Subject: Site Perimeter Security</span>
Situation remains under control. No breaches.
Crew generally compliant, though morale may dip without firmer discipline.
I continue to recommend we arm more personnel. It’s just common sense.
Audit Team arriving soon. Not a fan. There is no need for them to be here.</pre>`,

      "internaldocs": `<pre><strong>File: InternalDocs</strong>
<span class="desync">If Rig is compromised, initiate Protocol Blackout:</span>
- Activate Cell Signal jammer (In gun cabinet)
- Assign two men to lifeboat Guard Duty
- Secure control room with 3-man team
- Detain any civilians attempting to leave
<span class="hack-reveal">Do NOT wait for Roylott’s sign-off if situation escalates</span></pre>`,

      "suspiciousactivity": `<pre><strong>File: SuspiciousActivity</strong>
<span class="desync">People to Watch:</span>
- Teagan (too quiet)
- Slocum (drinks too much, probably listening)
- Kent (used to push back, now weirdly compliant)
- Goldman (soft—probable liability)
- Audit Team (unknown loyalty)</pre>`,

      "incidentreport": `<pre><strong>File: IncidentReport</strong>
<span class="desync">Summary:</span>
At 18:34, a physical altercation occurred in the upper mess between Vance Norris and Richard Copper.
Norris responded by <strong>breaking Copper’s nose</strong>.
<span class="hack-reveal">Action Taken:</span>
Both men placed on rotating shifts pending review.
<span class="hack-reveal">Note:</span> Norris is volatile. Crew stress at boiling point.</pre>`,

      "auditteam": `<pre><strong>File: AuditTeam</strong>
<span class="desync">Subjects:</span> “Audit Team”
<span class="desync">Assigned Liaison:</span> Nigel Gordon
<span class="hack-reveal">Initial Observations:</span>
Too many questions for civilians.
Repeated presence in sensitive zones.
Nigel instructed to shadow casually. Breach of protocol: <strong>detain</strong>.</pre>`,

      "reactor access codes": `<pre><strong>File: Reactor Access Codes</strong>
<span class="hack-reveal">On Roylott’s order:</span> Nuclear Reactor password changed.
<span class="desync">New Code:</span> <strong>8283</strong>
No notice. Breach of SOP 12-C.
<span class="hack-reveal">Note:</span> I don’t like being locked out of systems I’m paid to protect.</pre>`,

      "hr_legalprecedent_lapd.msg": `<pre><strong>File: HR_LegalPrecedent_LAPD.msg</strong>
<span class="desync">From:</span> HRLegal@lapd.gov
<span class="desync">To:</span> dstahl@lapd.net
<span class="desync">Date:</span> August 22, 2023
Mr. Stahl,
Your resignation is accepted in lieu of litigation.
<span class="hack-reveal">Cease contact with all former department personnel.</span>
Do not identify as LAPD in any professional capacity.
— Dept. of Internal Affairs</pre>`
    };

    return resolve(fileContents[fileName] || `<p>No such file found: <strong>${args.join(" ")}</strong></p>`);
  });
}

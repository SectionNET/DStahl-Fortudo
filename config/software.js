/* eslint-disable no-inner-declarations, no-nested-ternary, no-sequences, no-unused-vars */

function files() {
  return [
    "<p><strong>Available logs on this terminal:</strong></p>",
    "<pre>log 0001\nlog 0007\nlog 0015\nlog 0020\nlog 0024\nlog 0027\nlog 0029</pre>"
  ];
}

function read(args) {
  if (args.length === 0) {
    return "<p>Please specify a file to read. Example: <code>read log 0001</code></p>";
  }

  const fileName = args.join(" ").toLowerCase();

  const fileContents = {
    "log 0001": `
<pre><strong>LOG 0001</strong>
<span class="desync">Core Temp:</span> <strong>198°C</strong>
<span class="desync">Load Capacity:</span> <strong>64%</strong>
<span class="hack-reveal">Notes:</span>
System stable. Early warming curve shows slight delay on tertiary coolant loop, likely sensor lag. Will monitor.
Minor corrosion visible on valve 3B. Routine.</pre>`,

    "log 0007": `
<pre><strong>LOG 0007</strong>
<span class="desync">Core Temp:</span> <strong>232°C</strong>
<span class="desync">Load Capacity:</span> <strong>72%</strong>
<span class="hack-reveal">Notes:</span>
Thermal lag increasing. Reactor drawing deeper during high drill cycles.
Recommending we pull MacCready off drill routing rotation—he’s pushing cycle frequencies irregularly.
Will submit note to Roylott.</pre>`,

    "log 0015": `
<pre><strong>LOG 0015</strong>
<span class="desync">Core Temp:</span> <strong>246°C</strong>
<span class="desync">Load Capacity:</span> <strong>79%</strong>
<span class="hack-reveal">Notes:</span>
Pressure build-up at pump junction 4. Oscillating draw spikes reported.
Cooling loop 2B required manual override restart.
MacCready insists “the system can take it”—I’m less sure.</pre>`,

    "log 0020": `
<pre><strong>LOG 0020</strong>
<span class="desync">Core Temp:</span> <strong>267°C</strong>
<span class="desync">Load Capacity:</span> <strong>86%</strong>
<span class="hack-reveal">Notes:</span>
Coolant cavitation. Insulation showing signs of breakdown under radiological scan.
Began prep for partial shutdown, but Roylott “talked me through” the metrics again.
Perhaps I’m overreacting.</pre>`,

    "log 0024": `
<pre><strong>LOG 0024</strong>
<span class="desync">Core Temp:</span> <strong>288°C</strong>
<span class="desync">Load Capacity:</span> <strong>91%</strong>
<span class="hack-reveal">Notes:</span>
These numbers are not fine. Kent: remember you flagged this a week ago.
Structural integrity is starting to read soft. MacCready cannot handle a critical stop under these pressures.
I’ll raise it again—formally, this time. Even Roylott has to see it.</pre>`,

    "log 0027": `
<pre><strong>LOG 0027</strong>
<span class="desync">Core Temp:</span> <strong>313°C</strong>
<span class="desync">Load Capacity:</span> <strong>95%</strong>
<span class="hack-reveal">Notes:</span>
Sparks near the auxiliary manifold. Gas seeping around pressure ring.
Why is no one else treating this seriously? The heat shimmer down there feels alive.
I should have filed the shutdown request. I wrote it. Where is it?</pre>`,

    "log 0029": `
<pre><strong>LOG 0029</strong>
<span class="desync">Core Temp:</span> <strong>327°C</strong>
<span class="desync">Load Capacity:</span> <strong>98%</strong>
<span class="hack-reveal">Notes:</span>

System functioning within acceptable parameters.
Core temperature and load levels are well within theoretical thresholds.
All readings are optimal. No maintenance required. Reactor Control System Access code changed at Roylotts request, new code: 8283

—RK</pre>`
  };

  return fileContents[fileName] || `<p>No such file found: <strong>${args.join(" ")}</strong></p>`;
}

function search(args) {
  const keyword = args.join(' ').toLowerCase();
  const results = {}; // Empty index
  for (const [key, output] of Object.entries(results)) {
    if (keyword.includes(key)) return output;
  }
  return `<p>No results found for keyword: <strong>${keyword}</strong></p>`;
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
}

// Other commands like decrypt, identify, artifact, etc. can remain as-is unless you want them updated.


function decrypt(args) {
  if (args.length === 0) {
    return "<p>Some encrypted text must be provided: <code>decrypt 53CR3T T3XT</code></p>";
  }
  const textInClear = rot13(args.join(" "));
  return `<p class="hack-reveal">${textInClear}</p>`;
}

function rot13(s) {
  return s.replace(/[a-zA-Z]/g, (c) =>
    String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
  );
}

function identify() {
  const introMsg = [
    "What is this?",
    `<img src="https://thisartworkdoesnotexist.com/?${performance.now()}" style="width: 10rem; max-width: 100%;">`
  ];
  return {
    message: introMsg,
    onInput(answer) {
      return `Wrong! This is not "${answer}"`;
    }
  };
}

function artifact(args) {
  if (args.length === 0) {
    return [
      "<p>An ID must be provided: <code>artifact $id</code></p>",
      `You currently have access to the following artifacts: ${Object.keys(DWEETS).join(" ")}`
    ];
  }
  const artifactId = args[0];
  const artifactDweet = DWEETS[artifactId];
  if (!artifactDweet) {
    return `You do not have access to the artifact with ID ${artifactId}`;
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

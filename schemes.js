document.addEventListener("DOMContentLoaded", () => {

   const compschemes = {
    o: "O",
    h: "H",
    p: "P",
    u1: "U1",
    u2: "U2",
    t1: "T1",
    t2: "T2",
    s1: "S1",
    s2: "S2",
    a1: "A1",
    a2: "A2",
    l1: "L1",
    l2: "L2"
  };

  // CMLL comparison schemes
  for (const [a, b] of Object.entries(compschemes)) {
    document.querySelectorAll(`twisty-player.compcmll${a}`).forEach((p) => {
      p.setAttribute("experimental-stickering", "picture");
      p.setAttribute("experimental-sprite", `../../comparison/${b}.png`);
      p.setAttribute("background", "none");
      p.setAttribute("hint-facelets", "none");
      p.setAttribute("control-panel", "none");
      p.setAttribute("camera-longitude", "0");
    });
  }

  // CMLL scheme
  document.querySelectorAll('twisty-player.cube_cmll').forEach((p) => {
    p.setAttribute("experimental-stickering-mask-orbits","EDGES:-X-XXXXX----,CORNERS:--------,CENTERS:XX-X-X");
    p.setAttribute("background", "none");
    p.setAttribute("experimental-setup-anchor", "end");
    p.setAttribute("experimental-setup-alg", "x2 y");
    p.setAttribute("hint-facelets", "none");
  });

  // EOLRb scheme
  document.querySelectorAll("twisty-player.cube_eolrb").forEach((p) => {
    p.setAttribute("experimental-stickering-mask-orbits","EDGES:-O-O-O-O----,CORNERS:--------,CENTERS:-I-I--");
    p.setAttribute("background", "none");
    p.setAttribute("experimental-setup-anchor", "end");
    p.setAttribute("experimental-setup-alg", "x2 y");
    p.setAttribute("camera-longitude", "0");
  });

  // 4x4 (PLL) scheme
  document.querySelectorAll("twisty-player.cube_fourbyfour").forEach((p) => {
    p.setAttribute("puzzle", "4x4x4");
    p.setAttribute("background", "none");
    p.setAttribute("experimental-setup-anchor", "end");
    p.setAttribute("experimental-setup-alg", "x2 y");
    p.setAttribute("camera-longitude", "0");
  });

});

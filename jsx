export default function Home() {
  return (
    <main style={{background:'#000', color:'#0f0', minHeight:'100vh', padding:'50px', textAlign:'center', fontFamily:'sans-serif'}}>
      <div style={{maxWidth:'600px', margin:'auto', textAlign:'left'}}>
        <h1 style={{textAlign:'center'}}>🪂 BILLIONS AIRDROP VIBECHECK</h1>
        <p style={{textAlign:'center'}}>Tick whatever applies. No cap.</p>
        
        <label style={{display:'block', margin:'20px 0', fontSize:'20px'}}>
          <input type="checkbox" id="twitter" style={{transform:'scale(1.5)', marginRight:'10px'}} />
          Posted at least 20 yaps on Twitter
        </label>
        
        <label style={{display:'block', margin:'20px 0', fontSize:'20px'}}>
          <input type="checkbox" id="yappa" style={{transform:'scale(1.5)', marginRight:'10px'}} />
          Member of Billions Yappas Community
        </label>
        
        <label style={{display:'block', margin:'20px 0', fontSize:'20px'}}>
          <input type="checkbox" id="discord" style={{transform:'scale(1.5)', marginRight:'10px'}} />
          Got OG / Yapper / Verified role on Discord
        </label>
        
        <label style={{display:'block', margin:'20px 0', fontSize:'20px'}}>
          <input type="checkbox" id="nft" style={{transform:'scale(1.5)', marginRight:'10px'}} />
          Own at least one Billions NFT
        </label>
        
        <label style={{display:'block', margin:'20px 0', fontSize:'20px'}}>
          <input type="checkbox" id="join" style={{transform:'scale(1.5)', marginRight:'10px'}} />
          Joined before December 1, 2025
        </label>
        
        <div style={{textAlign:'center', marginTop:'40px'}}>
          <button onClick={() => {
            const checked = document.querySelectorAll('input:checked').length;
            const pct = checked * 20;
            let msg = '';
            if (pct >= 80) msg = "🎉 YOU'RE IN FR! SNAP THAT DROP UP.";
            else if (pct >= 60) msg = "🔥 Almost there. Keep yappin'.";
            else if (pct >= 40) msg = "🟡 Meh. Do better, king.";
            else msg = "❌ Nah. Try again next life.";
            
            document.getElementById('result').innerHTML = 
              `<strong>${msg}</strong><br><br>You got ${pct}% eligibility.`;
          }} style={{padding:'15px 30px', fontSize:'18px', background:'#00ff00', border:'none', cursor:'pointer', color:'black'}}>
            Am I In?
          </button>
        </div>
        
        <div id="result" style={{marginTop:'30px', fontSize:'24px', textAlign:'center'}}></div>
      </div>
    </main>
  );
}

<div style="background: #f9f9f9; padding: 25px; border-radius: 8px; border: 1px solid #ddd; font-family: Arial, sans-serif; text-align: center; max-width: 650px; margin: 0 auto;">
  <h2 style="margin-bottom: 10px; color: #333;">🔍 Surname Secret Finder Tool</h2>
  <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Type your family surname to check its historical database instantly:</p>
  
  <input type="text" id="surnameInput" placeholder="Type surname here (e.g., Gray, Sullivan)..." style="padding: 12px; width: 70%; max-width: 350px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; outline: none;">
  
  <button onclick="searchCloudDatabase()" style="padding: 12px 20px; background: #5C1A1A; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-left: 5px; font-weight: bold;">Search History</button>
  
  <div id="resultBox" style="margin-top: 20px; font-size: 15px; color: #444; text-align: left; line-height: 1.6;"></div>
</div>

<!-- GitHub se background mein data load karne ki script -->
<script src="YOUR_RAW_GITHUB_LINK_HERE"></script>

<script>
  function searchCloudDatabase() {
    let query = document.getElementById('surnameInput').value.trim().toLowerCase();
    let resultBox = document.getElementById('resultBox');
    
    if (query === "") {
      resultBox.innerHTML = "<span style='color: red;'>Please type a surname to search!</span>";
      return;
    }
    
    if (typeof surnameDatabase !== 'undefined' && surnameDatabase[query]) {
      resultBox.innerHTML = "<strong>Result:</strong> " + surnameDatabase[query] + "<br><br><em style='color: #0066cc;'>Full detailed archives available on our blog!</em>";
    } else {
      resultBox.innerHTML = "<span style='color: #555;'>No direct match found for '<strong>" + query + "</strong>'. Try checking the spelling or search another surname.</span>";
    }
  }
</script>
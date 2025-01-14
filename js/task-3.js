const profile = {
    username: "Jacob",
    playTime: 300,

    getInfo() {
      return `${this.username} has ${this.playTime} active hours!`;
    },

    changeUsername(newName) {
      this.username = newName;
    },

    updatePlayTime(hours) {
      this.playTime += hours;
    },
  };

  function testProfile() {
    const output = document.getElementById('profileOutput');
    let result = profile.getInfo();

    profile.changeUsername("Marco");
    result += `\nAfter changeUsername: ${profile.getInfo()}`;

    profile.updatePlayTime(20);
    result += `\nAfter updatePlayTime: ${profile.getInfo()}`;

    output.textContent = result;
  }
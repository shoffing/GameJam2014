#pragma strict

private var audioSrc : AudioSource;
private var playerCont : PlayerControl;

function Start() {
	audioSrc = GetComponent(AudioSource);
	playerCont = GameObject.FindWithTag("Player").GetComponent(PlayerControl);
	
	audioSrc.loop = true;
	audioSrc.pitch = 0;
	audioSrc.Play();
}

function Update() {
	// Set pitch for playback speed
	audioSrc.pitch = playerCont.deltaAnger * 5;
}
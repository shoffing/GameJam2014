#pragma strict

var player : GameObject;

function Start () {
	player = GameObject.FindGameObjectsWithTag("Player")[0];
	var anim : Animation = GetComponent(Animation);
	var state = anim["C4D Animation Take"];
	anim.Play();
	state.speed = 0;
	state.time = 0;
}

function Update () {
	var anim : Animation = GetComponent(Animation);
	var state = anim["C4D Animation Take"];
	state.speed = 0;
	state.time = (state.length)*(player.GetComponent(PlayerControl).anger/100);
}
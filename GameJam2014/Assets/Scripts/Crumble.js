#pragma strict

var player : GameObject;

function Start () {
	player = GameObject.FindWithTag("Player");
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
	var tAnger = player.GetComponent(PlayerControl).anger;
	var percent = tAnger/100;
	state.time = (state.length)*percent;
}
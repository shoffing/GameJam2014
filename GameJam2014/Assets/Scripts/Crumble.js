#pragma strict

var player : GameObject;

function Start () {
	player = GameObject.FindGameObjectsWithTag("Player")[0];
	var anim : Animation = GetComponent(Animation);
	anim.Play();
	anim["C4D Animation Take"].speed = 0;
	anim["C4D Animation Take"].time = 40;
}

function Update () {
	Debug.Log("FOUND:"+player.GetComponent(PlayerControl).anger);
}
#pragma strict

private var chCont : CharacterController;
private var chMotor : CharacterMotor;
private var lastSafePosition : Vector3;
public  var anger : double;
private var lastStep : float = 0;

function Start() {
	chMotor = GetComponent(CharacterMotor);
	chCont = GetComponent(CharacterController);
	anger = 0;
	lastSafePosition = transform.position;
}

function Update() {
	if(chMotor.grounded && chCont.velocity.magnitude == 0) {
		lastSafePosition = transform.position;
	}
	if( chCont.velocity.magnitude < 4 ){
		anger = anger - 0.15;
		if( anger < 1 ){
			anger = 0;
		}
	}
	else{
		anger = anger + 0.2 ;
		if( anger > 100 ){
			anger = 100;
		}
	}
	
	// Camera Object
	var cam = GameObject.FindWithTag("MainCamera").GetComponent(Camera);
	cam.fieldOfView = 90 + (anger/100)*5;
	
	// Ambient Lighting
	var Mod = anger*1.7/255;
	RenderSettings.ambientLight = Color(0.8-Mod,0.8-Mod,0.8-Mod);
	
	// Character motor settings object
	var move = chMotor.movement;
	
	// Tiers of angryness, changing the movement stuff
	var tier = Mathf.Floor(anger/20);
	if( tier == 1 ){ // Anger 1
		move.maxForwardSpeed = 9;
		move.maxGroundAcceleration = 12;
		Debug.Log("Anger 1");
	}
	else if( tier == 2 ){ // Anger 2
		move.maxForwardSpeed = 13;
		move.maxGroundAcceleration = 14;
		Debug.Log("Anger 2");
	}
	else if( tier == 3 ){ // Anger 3
		move.maxForwardSpeed = 17;
		move.maxGroundAcceleration = 16;
		Debug.Log("Anger 3");
	}
	else if( tier == 4 ){ // SUPER ANGRY
		move.maxForwardSpeed = 21;
		move.maxGroundAcceleration = 18;
		Debug.Log("Anger 4");
	}
	else if( tier == 5 ){ // MAXIMUM ANGER
		move.maxForwardSpeed = 25;
		move.maxGroundAcceleration = 20;
		Debug.Log("Anger MAX");
	}
	else{ // Calm
		move.maxForwardSpeed = 5;
		move.maxGroundAcceleration = 10;
		move.maxSidewaysSpeed = 5;
		move.maxBackwardsSpeed = 5;
		Debug.Log("Calm");
	}
	
	var timeDiff = 0.8 - (anger/100)*0.4;
	// Footsteps stuff
	var footAudio = GetComponent(AudioSource);
	if( chMotor.grounded && chCont.velocity.magnitude > 0.3 && Time.time > lastStep+timeDiff ){
		footAudio.Play();
		lastStep = Time.time;
	}
	
	
}

function ResetPlayer() {
	transform.position = lastSafePosition;
	chMotor.SetVelocity(Vector3.zero);
}
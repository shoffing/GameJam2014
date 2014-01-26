#pragma strict

private var chCont : CharacterController;
private var chMotor : CharacterMotor;
private var lastSafePosition : Vector3;
public  var anger : double;

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
	if( chCont.velocity.magnitude < 3 ){
		anger = anger * 0.95;
		if( anger < 1 ){
			anger = 0;
		}
	}
	else{
		anger = anger + 0.3 ;
		if( anger > 100 ){
			anger = 100;
		}
	}
	
}

function ResetPlayer() {
	transform.position = lastSafePosition;
	chMotor.SetVelocity(Vector3.zero);
}
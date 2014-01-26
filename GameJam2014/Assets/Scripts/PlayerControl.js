#pragma strict

private var chCont : CharacterController;
private var chMotor : CharacterMotor;
private var lastSafePosition : Vector3;

function Start() {
	chMotor = GetComponent(CharacterMotor);
	chCont = GetComponent(CharacterController);
	
	lastSafePosition = transform.position;
}

function Update() {
	if(chMotor.grounded && chCont.velocity.magnitude == 0) {
		lastSafePosition = transform.position;
	}
}

function ResetPlayer() {
	transform.position = lastSafePosition;
	chMotor.SetVelocity(Vector3.zero);
}
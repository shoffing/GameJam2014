#pragma strict

function OnTriggerEnter(col : Collider) {
	if(col.gameObject.CompareTag("Player")) {
		col.gameObject.GetComponent(PlayerControl).ResetPlayer();
	}
}
using UnityEngine;
using System.Collections;

//Charlie version
public class KillBox : MonoBehaviour {
	private Vector3 playerOriginalPos;
	private Quaternion playerOriginalRot;

	// Use this for initialization
	void Start () {
		playerOriginalPos = GameObject.FindGameObjectWithTag( "Player" ).transform.position;
		playerOriginalRot = GameObject.FindGameObjectWithTag( "Player" ).transform.rotation;
	}
	
	// Update is called once per frame
	void Update () {

	}

	void OnTriggerEnter(Collider other) {
		if( other.gameObject.tag == "Player" )
		{
			Debug.Log (other.gameObject.transform.position );
			other.gameObject.transform.position = playerOriginalPos;
			other.gameObject.transform.rotation = playerOriginalRot;

		}
	}
}

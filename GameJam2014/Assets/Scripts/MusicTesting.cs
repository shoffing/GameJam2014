using UnityEngine;
using System.Collections;

public class MusicTesting : MonoBehaviour {
	private GameObject musicController;
	//private MusicController musicScript;

	// Use this for initialization
	void Start () {
		musicController = GameObject.FindGameObjectWithTag( "MusicControl" );
		MusicController musicScript = (MusicController) musicController.GetComponent(typeof(MusicController));
		musicScript.PlaySong( "Bounty_Hunter", false );
		//Debug.Log (musicScript.CurrentSong() );
	}
	
	// Update is called once per frame
	void Update () {

	}
}

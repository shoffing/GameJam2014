using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class MusicController : MonoBehaviour {

	private static AudioClip current;
	private static AudioClip[] songs;
	private Dictionary<string, AudioClip> songList = new Dictionary<string, AudioClip>();
	private static AudioSource musicPlayer;

	//This helps getting songs easier by using KeyValue pairs instead of boring array shit.
	private void _ConvertArrayToDict()
	{
		foreach( AudioClip clip in songs )
		{
			songList.Add( clip.name, clip );
		}
	}

	// Use this for initialization
	void Start () {
		musicPlayer = GetComponent<AudioSource>();
		songs = Resources.LoadAll<AudioClip>("Music");
		_ConvertArrayToDict();
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public void PlaySong( string song, bool loop = false )
	{
		AudioClip newSong;
		if( songList.TryGetValue( song, out newSong ) )
		{
			current = newSong;
			musicPlayer.clip = current;
			musicPlayer.loop = loop;
			musicPlayer.Play();
		}
		else
		{
			Debug.LogError( "Did not find song of name " + song );
		}
	}

	public void PauseSong()
	{
		musicPlayer.Pause();
	}

	public void StopSong()
	{
		musicPlayer.Stop();
	}

	public void FadeIn( string song, float fadeTime, bool loop = false )
	{

	}

	public void ChangePitch( float pitch, float changeRate )
	{

		musicPlayer.pitch = Mathf.Lerp( musicPlayer.pitch, pitch, changeRate );
	}

	public static AudioClip CurrentSong()
	{
		return current;
	}
	
}

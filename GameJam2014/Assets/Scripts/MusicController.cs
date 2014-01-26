using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class MusicController : MonoBehaviour {

	private static AudioClip current;
	private static AudioClip[] songs;
	private Dictionary<string, AudioClip> songList;
	private AudioSource musicController;


	private void _ConvertArrayToDict()
	{
		foreach( AudioClip clip in songs )
		{
			songList.Add( clip.name, clip );
		}
	}

	// Use this for initialization
	void Start () {
		musicController = GetComponent<AudioSource>();
		songs = Resources.LoadAll<AudioClip>("Music");
		_ConvertArrayToDict();
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void PlaySong( string song, bool loop )
	{
		AudioClip newSong;
		if( songList.TryGetValue( song, out newSong ) )
		{
			current = newSong;
			musicController.clip = current;
			musicController.loop = loop;
		}
	}

	void PauseSong()
	{
		musicController.Pause();
	}

	void StopSong()
	{
		musicController.Stop();
	}

	void FadeInSong( string song, bool loop )
	{

	}

	public static AudioClip CurrentSong()
	{
		return current;
	}
}

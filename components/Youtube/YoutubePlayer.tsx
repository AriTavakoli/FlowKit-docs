import React, { useEffect, useRef } from "react";
import YouTubePlayer from 'youtube-player';
import styles from './Youtube.module.css'
import { Icon } from '@iconify/react';
const YouTubeChapters = ({ videoId, chapters, children }) => {
    const playerRef = useRef(null);
    const player = useRef(null);
    const checkIntervalRef = useRef(null);

    useEffect(() => {
        player.current = YouTubePlayer(playerRef.current, {
            videoId: videoId,
            width: 640,
            height: 390,
        });
        
        player.current.on('stateChange', event => {
            if (event.data === 1) { // The player is ready when the video starts playing
                player.current.isReady = true;
            }
        });

        return () => {
            if (checkIntervalRef.current) {
                clearInterval(checkIntervalRef.current);
            }
        };
    }, [videoId]);

    const playChapter = async (startSeconds, endSeconds) => {
        if (!player.current.isReady) return;
        if (checkIntervalRef.current) {
            clearInterval(checkIntervalRef.current);
        }

        await player.current.seekTo(startSeconds);
        await player.current.playVideo();
        
        checkIntervalRef.current = setInterval(() => {
            player.current.getCurrentTime().then((currentTime) => {
                if (currentTime >= endSeconds) {
                    player.current.pauseVideo();
                    clearInterval(checkIntervalRef.current);
                }
            });
        }, 1000);
    };
    return (
        <div className={styles.container} >
            <div className={styles.childContainer}>
                {children}
            </div>

            <div ref={playerRef} className={styles.player} />

            <div className={styles.chapterGrid}>
                {chapters.map((chapter, index) => (
                    <div key={index} className={styles.chapterColumn} onClick={() => playChapter(chapter.start, chapter.end)}>
                        <div
                            className={styles.chapterButton}

                        >
                            {chapter.name}
                            <Icon icon="octicon:play-24" width="20" />

                        </div>
                                           
            <div className= {styles.divider}/>
                        <p className={styles.chapterDescription}>{chapter.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default YouTubeChapters;

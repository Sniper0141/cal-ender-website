import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>CalEnder</h1>
        <p className={styles.subtitle}>
          The first calendar app designed specifically for Endermen, featuring a soothing dark interface
          that's easy on Enderman eyes. Because everyone deserves a comfortable digital experience.
        </p>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Enderman-Friendly Design</h2>
          <p className={styles.featureDescription}>
            Carefully crafted with deep blacks and soothing purples that respect Enderman vision sensitivity.
            No bright lights, no eye strain - just pure comfort.
          </p>
        </div>

        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>End Dimension Time Sync</h2>
          <p className={styles.featureDescription}>
            Automatically syncs with End Dimension time zones, making it easier to coordinate
            teleportation schedules and block collecting activities.
          </p>
        </div>

        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Teleport-Friendly UI</h2>
          <p className={styles.featureDescription}>
            Large touch targets and intuitive gestures make it easy to use even while teleporting.
            Never miss an important date again!
          </p>
        </div>
      </section>

      <section className={styles.cta}>
        <a href="#download" className={styles.button}>
          Download for End Devices
        </a>
      </section>
    </main>
  );
}

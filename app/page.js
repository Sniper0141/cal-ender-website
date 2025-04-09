import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.logoContainer}>
          <Image
            src="/apple-icon.png"
            alt="CalEnder Logo"
            width={120}
            height={120}
            priority
            className={styles.logo}
          />
        </div>
        <h1 className={styles.title}>CalEnder</h1>
        <p className={styles.subtitle}>
          The first calendar app designed specifically for Endermen, featuring a soothing dark interface
          that's easy on Enderman eyes. Because everyone deserves a comfortable digital experience.
        </p>
      </section>

      <section className={styles.screenshots}>
        <div className={styles.screenshotWrapper}>
          <Image
            src="/calendar-view.jpg"
            alt="CalEnder Calendar View"
            fill
            className={styles.screenshot}
            priority
          />
        </div>
        <div className={styles.screenshotWrapper}>
          <Image
            src="/settings-view.jpg"
            alt="CalEnder Settings with Haptic Feedback"
            fill
            className={styles.screenshot}
            priority
          />
        </div>
        <div className={styles.screenshotWrapper}>
          <Image
            src="/new-appointment.jpg"
            alt="CalEnder New Appointment Form"
            fill
            className={styles.screenshot}
            priority
          />
        </div>
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
          <h2 className={styles.featureTitle}>Fighting Discrimination</h2>
          <p className={styles.featureDescription}>
            By providing an accessible, dark-mode-first calendar, we're taking a stand against digital discrimination. 
            Every Enderman deserves equal access to time management tools, regardless of their light sensitivity.
          </p>
        </div>
      </section>

      <section className={styles.cta}>
        <a href="https://expo.dev/artifacts/eas/uFDYd7DVDeB17hbg4coKQt.apk" className={styles.button}>
          Download for End Devices
        </a>
      </section>
    </main>
  );
}

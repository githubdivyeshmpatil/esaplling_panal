import React from "react";
import soundImage from "../assets/images/soundbar.jpg"; // ✅ Make sure the image path is correct

const Soundname = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-8 px-4 py-8 md:px-12 bg-white">
      
      {/* Left Side Image with Slow 360 Spin */}
       <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-lg animate-spin-slow"> {/* Increased from max-w-sm to max-w-lg */}
          <img
            src={soundImage}
            alt="Soundname – Evolve Gen II"
            className="w-full h-auto "
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>
      </div>


      {/* Right Side Description */}
      <div className="w-full md:w-1/2 text-gray-800">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-900">
          Evolve – G-2{" "}
          <span className="block text-base font-medium text-gray-600">
            (Camera with live 360 Surround System)
          </span>
        </h2>

        <ul className="list-disc list-inside space-y-3  leading-relaxed text-sm sm:text-base md:text-lg text-justify">
          <li>
            The primary justification for finding Conference indoors is the
            Evolve – Generation – II, which allows you to spend more time
            curled up on the couch watching your favorite Podcast, Conference,
            Training.
          </li>
          <li>
            Supreme-quality sound and top-notch acoustics are mainly because of
            the high power output capacity of the Generation – II.
          </li>
          <li>
            This soundbar’s power is as massive as <strong>625W</strong> distributed as
            75W from each of the triple drivers, 75W output from each of the
            dual wireless rear satellites, and 125W output from each of the dual
            wireless subwoofers.
          </li>
          <li>
            This soundbar's potent triple drivers, spanning 9x5.8cm, are a
            source of delightful audio-quality streaming. The subwoofer's
            16.51cm (6.5”) driver and dual satellites of driver size 5.8x9 cm
            each can produce detailed sound.
          </li>
          <li>
            With its <strong>5.2 CH output</strong> and <strong>Dolby Audio</strong>, this soundbar
            is here to provide you with amazing surround sound. It's the ideal
            option for streaming music, watching movies, and more.
          </li>
          <li>
            <strong>Multi connectivity</strong> feature will now allow you to connect
            various compatible devices to this soundbar and experience detailed
            audio like never before.
          </li>
          <li>
            This Generation – II user interface is reinforced with an{" "}
            <strong>LED display</strong> which displays the operating mode and controls of
            the speaker.
          </li>
          <li>
            This soundbar can be wall-mounted, so it comes with a wall-mount
            bracket and a fastener, making your desk space free and PTZ camera.
          </li>
          <li>
            <strong>Large Field of View:</strong> PTZ cameras move anywhere between zero
            pan/tilt and the full 360° pan / 180° tilt. This gives control over
            the required field of view (FOV). PTZ cameras can be paired with
            stationary cameras to augment monitoring capability.
          </li>
          <li>
            <strong>Motion-Based Auto Tracking:</strong> Auto tracking adjusts the field
            of view on the fly to follow moving objects in many PTZ cameras.
            It’s typically best applied in quiet areas with minimal movement.
          </li>
          <li>
            <strong>Time-Based Auto Scan:</strong> Pan, tilt and zoom presets can be
            timed to capture different fields of view (FOV) over a surveillance
            zone.
          </li>
          <li>
            <strong>Remote Camera Control:</strong> Tracking suspicious activity has
            never been easier with PTZ cameras. Remote camera control allows
            users to change the camera’s field of view without having to go
            onsite.
          </li>
          <li>
            <strong>Zoom Capabilities:</strong> Optical and digital zoom features are
            useful features for PTZ cameras that allow you to see objects from
            miles away or focus on the details important for surveillance.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Soundname;

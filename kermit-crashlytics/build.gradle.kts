/*
 * Copyright (c) 2021 Touchlab
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

plugins {
    id("com.android.library")
    kotlin("multiplatform")
}

val CRASHKIOS_CORE_VERSION: String by project
val CRASHLYTICS_ANDROID_VERSION: String by project

apply(from = "../gradle/configure-crash-logger.gradle")

kotlin {
    android {
        publishAllLibraryVariants()
    }

    val androidMain by sourceSets.getting {
        dependencies {
            implementation("org.jetbrains.kotlin:kotlin-stdlib")
            implementation("com.google.firebase:firebase-crashlytics:$CRASHLYTICS_ANDROID_VERSION")
        }
    }
}

android {
    compileSdkVersion(30)
    defaultConfig {
        minSdkVersion(15)
    }

    val main by sourceSets.getting {
        manifest.srcFile("src/androidMain/AndroidManifest.xml")
    }
}

apply(from = "../gradle/gradle-mvn-mpp-push.gradle")

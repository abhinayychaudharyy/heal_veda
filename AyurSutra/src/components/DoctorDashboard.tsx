import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, User, Calendar, FileText, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import newLogoImage from 'figma:asset/55a14cbbf289c9fde8c4c8ca4230c7f789072dbd.png';

interface DoctorDashboardProps {
    onNavigate: (page: 'landing') => void;
    user?: { id: string; name: string; email: string; userType: 'doctor' };
}

export function DoctorDashboard({ onNavigate, user }: DoctorDashboardProps) {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 relative overflow-hidden">
            {/* Background particles */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20"
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="flex justify-between items-center mb-8">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-white/90 p-1">
                            <img
                                src={newLogoImage}
                                alt="HealVeda Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                                Doctor Portal
                            </h1>
                            <p className="text-gray-400 text-sm">Welcome, Dr. {user?.name || 'Vaidya'}</p>
                        </div>
                    </div>
                    <Button variant="ghost" onClick={() => onNavigate('landing')} className="text-gray-400 hover:text-white">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Logout
                    </Button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Quick Stats */}
                    <Card className="bg-gray-800/50 border-green-500/20 backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg text-white">Today's Appointments</CardTitle>
                            <Calendar className="w-5 h-5 text-green-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-white">0</div>
                            <p className="text-xs text-gray-400 mt-1">No appointments scheduled for today</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800/50 border-green-500/20 backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg text-white">Total Patients</CardTitle>
                            <User className="w-5 h-5 text-green-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-white">0</div>
                            <p className="text-xs text-gray-400 mt-1">Registered patients under your care</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800/50 border-green-500/20 backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg text-white">Pending Reports</CardTitle>
                            <FileText className="w-5 h-5 text-green-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-white">0</div>
                            <p className="text-xs text-gray-400 mt-1">Reports requiring review</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content Area Placeholder */}
                    <Card className="lg:col-span-2 bg-gray-800/50 border-green-500/20 backdrop-blur-sm min-h-[400px]">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Activity className="w-5 h-5 mr-2 text-green-400" />
                                Patient Activity
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center h-64 text-gray-400">
                            <p>Select a patient to view details</p>
                            <Button variant="outline" className="mt-4 border-green-500/50 text-green-400 hover:bg-green-500/10">
                                View All Patients
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Sidebar Area Placeholder */}
                    <Card className="bg-gray-800/50 border-green-500/20 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-white">Notifications</CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-400 text-sm">
                            <p>No new notifications.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

